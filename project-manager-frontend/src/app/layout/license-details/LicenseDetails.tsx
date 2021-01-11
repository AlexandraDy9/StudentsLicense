import * as React from "react";
import { LicenseDetailsProps, HandlersProps } from "./types";
import { useHandlers } from "./useHandlers";
import TitleIcon from "@material-ui/icons/Title";
//style
import "./styles/LicenseDetails.scss";
import { cn } from "../../utils";
import { CustomTextField } from "../../components/custom-textfield/CustomTextField";
import Select from "react-select";
import { DropzoneDialog } from "material-ui-dropzone";
import { Button, Chip, MenuItem, TextField } from "@material-ui/core";
import { allTechnologies } from "../../variables/constants";

const bem = cn("license-details");

export default function LicenseDetails(props: LicenseDetailsProps) {
  const { literals, student } = props;
  const selectStyles = {
    control: (provided: any) => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
  };

  const handler: HandlersProps = useHandlers(props);

  return (
    <React.Fragment>
      <div className={bem("fields-container")}>
        <Select
          autoFocus
          onChange={handler.handleSelectedTeacher}
          options={handler.handleGetTeachersOptions()}
          search
          placeholder="Profesor coordonator"
          styles={selectStyles}
        />
      </div>
      <div className={bem("fields-container")}>
        <CustomTextField
          onChange={handler.handleTitleChange}
          defaultValue={student?.license?.title || ""}
          nodeBeforeInput={<TitleIcon />}
          placeholder={"Titlul lucrarii"}
        />
      </div>
      <div className={bem("upload-button")}>
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
          {allTechnologies?.map((option: any, index: number) => {
            if (
              handler.technologies?.filter(
                (item: any) => option === item
              )?.length === 0
            ) {
              return (
                <MenuItem key={index} value={option?.toString() || ""}>
                  {option}
                </MenuItem>
              );
            }
          })}
        </TextField>
      </div>
    </React.Fragment>
  );
}
