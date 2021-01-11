import * as React from "react";
import { EditLicenseDetailsProps, HandlerProps } from "./types";
//styles
import "./EditLicenseDetails.scss";
import { cn } from "../../../utils";
import { useHandlers } from "./useHandlers";
import { Chip, MenuItem, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { DropzoneDialog } from "material-ui-dropzone";
import SaveButton from "../../../components/SaveButton/SaveButton";

const bem = cn("edit-license-details");

export default function EditLicenseDetails(props: EditLicenseDetailsProps) {
  const { literals, student } = props;
  const handler: HandlerProps = useHandlers(props);

  return (
    <React.Fragment>
      <div className={bem("text-field")}>
        <b>Descrierea: </b>
        <TextField
          multiline
          rows={10}
          defaultValue={student.license?.description}
          placeholder={"Descrierea lucrarii"}
          onClick={handler.handleDescription}
        />
      </div>
      <div className={bem("upload-button")}>
        <b>Momentan aveti 1 incarcari  </b>
        <Button
          variant="contained"
          component="label"
          onClick={handler.handleOpen}
        >
          {literals["upload.file"]}
        </Button>

        <DropzoneDialog
          open={handler.closeUpload}
          onSave={handler.handleSave}
          acceptedFiles={literals["accepted.file.upload"]}
          showPreviews={true}
          maxFileSize={5000000}
          filesLimit={1}
          onClose={handler.handleClose.bind(this)}
        />
      </div>

      <div className={bem("technologies-container")}>
        <p className={bem("technologies-title")}>Techonologii:</p>
        {handler.technologies?.map((value: any) => {
          return (
            <Chip
              variant="outlined"
              size="small"
              label={value || ""}
              onDelete={() => {
                handler.deleteTechnology(value);
              }}
            />
          );
        })}
        <TextField
          select
          placeholder={"Techonologii"}
          value={handler.selectedTechnologies || null}
          onChange={handler.addTechnology}
        >
          {handler.allTechnologies?.map((option: any, index: number) => {
            if (
              handler.technologies?.filter((item: any) => option === item)
                ?.length === 0
            ) {
              return (
                <MenuItem key={index} value={option.toString() || ""}>
                  {option}
                </MenuItem>
              );
            }
          })}
        </TextField>
      </div>
      <SaveButton onClick={handler.onSaveButton} />
    </React.Fragment>
  );
}
