import * as React from "react";
import { TeacherThemesProps, HandlersProps } from "./types";
import { useHandlers } from "./useHandlers";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//style
import "./styles/TeacherThemes.scss";
import { cn } from "../../utils";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { CustomModalSimple } from "../../components/Modal";
import SaveButton from "../../components/SaveButton/SaveButton";
import Select from 'react-select';

const bem = cn("teacher-themes");

export default function TeacherThemes(props: TeacherThemesProps) {
  const { teacher } = props;

  const handler: HandlersProps = useHandlers(props);
  const selectStyles = {
    control: (provided: any) => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
  };

  return (
    <div className={bem("wrapper")}>
      {handler.addModalVisibility && (
        <CustomModalSimple
          onClose={() => handler.handleAddModalVisibility(false)}
          modalVisibility={handler.addModalVisibility}
          putExitButton={true}
          title={"Adaugare tema"}
        >
          <React.Fragment>
            <div className={bem("text-field-container")}>
              <TextField
                className={bem("text-field")}
                label={"Titlul temei"}
                variant="outlined"
                onChange={handler.handleThemeTitle}
                defaultValue={handler.chosenTheme?.title || ""}
              />
            </div>
            <div className={bem("text-field-container")}>
              <TextField
                multiline
                rowsMax={10}
                className={bem("text-field")}
                label={"Descrierea temei"}
                variant="outlined"
                onChange={handler.handleThemeDescription}
                defaultValue={handler.chosenTheme?.description || ""}
              />
            </div>
            <SaveButton onClick={handler.saveThemeDetails} />
          </React.Fragment>
        </CustomModalSimple>
      )}
      <div className={bem("header")}>
        <b className={bem("header-title")}>Temele propuse</b>
        <Fab
          color="primary"
          onClick={() => handler.handleAddModalVisibility(true)}
        >
          <AddIcon />
        </Fab>
      </div>
      <Select
        autoFocus
        options={handler.sessionOptions}
        defaultValue={handler.selectedSession}
        onChange={handler.handleSession}
        placeholder="Sesiunea..."
        styles={selectStyles}
      />
      <div className={bem("container")}>
        {teacher?.projects?.length === 0 &&
          <p className={bem("message-empty")}>Nu aveti adaugata nicio tema.</p>
        }
        {teacher?.projects?.filter((project) => project?.sessionYear === Number.parseInt(handler.selectedSession.label))
          .map((theme: any) => (
          <Card variant="outlined" className={bem("card")}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {theme?.title}
              </Typography>
              <Typography variant="body2" component="p">
                {theme?.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
