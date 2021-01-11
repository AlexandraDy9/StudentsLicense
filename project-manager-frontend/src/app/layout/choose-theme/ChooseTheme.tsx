import * as React from "react";
import { ChooseThemeProps, HandlersProps } from "./types";
import { useHandlers } from "./useHandlers";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
//style
import "./styles/ChooseTheme.scss";
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

const bem = cn("choose-theme");

export default function ChooseTheme(props: ChooseThemeProps) {
  const { projects } = props;

  const handler: HandlersProps = useHandlers(props);

  return (
    <React.Fragment>
      {handler.addModalVisibility && (
        <CustomModalSimple
          onClose={() => handler.handleAddModalVisibility(false)}
          modalVisibility={handler.addModalVisibility}
          putExitButton={true}
          title={handler.isAddedTheme ? "Editare tema": "Adaugare tema"}
        >
          <React.Fragment>
            <div className={bem("text-field-container")}>
              <TextField
                className={bem("text-field")}
                label={"Titlul temei"}
                variant="outlined"
                onChange={handler.handleThemeTitle}
                defaultValue={handler.createdTheme?.title || ""}
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
                defaultValue={handler.createdTheme?.description || ""}
              />
            </div>

            <SaveButton onClick={handler.saveThemeDetails} />
          </React.Fragment>
        </CustomModalSimple>
      )}
      <div className={bem("header")}>
        {handler.chosenTheme ? (
          <p className={bem("header-title")}>
            Ai ales tema: {handler.chosenTheme.title}
          </p>
        ) : (
          <p className={bem("header-title")}>Trebuie sa alegi o tema.</p>
        )}

        {handler.isAddedTheme ? (
          <Fab
            variant="extended"
            color="primary"
            onClick={() => handler.handleAddModalVisibility(true)}
          >
            <EditIcon />
            Editare tema
          </Fab>
        ) : (
          <Fab
            color="primary"
            onClick={() => handler.handleAddModalVisibility(true)}
          >
            <AddIcon />
          </Fab>
        )}
      </div>
      <div className={bem("container")}>
        {handler.isAddedTheme && (
          <Card
            variant="outlined"
            className={bem("card")}
            style={{ backgroundColor: "#B2E9FF" }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {handler.createdTheme.title}
              </Typography>
              <Typography variant="body2" component="p">
                {handler.createdTheme.description}
              </Typography>
            </CardContent>
            <CardActions
              onClick={() => handler.chooseClick(handler.createdTheme)}
            >
              <Button size="small">
                {handler.chosenTheme?.title === handler.createdTheme?.title ? (
                  <p>Deselecteaza</p>
                ) : (
                  <p>Selecteaza</p>
                )}
              </Button>
            </CardActions>
          </Card>
        )}
        {projects?.filter((project) => project.sessionYear === 2021)?.map((topic) => (
          <Card variant="outlined" className={bem("card")}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {topic?.teacher?.firstName + " " + topic?.teacher?.lastName}
              </Typography>
              <Typography variant="h5" component="h2">
                {topic?.title}
              </Typography>
              <Typography variant="body2" component="p">
                {topic?.description}
              </Typography>
            </CardContent>
            <CardActions onClick={() => handler.chooseClick(topic)}>
              <Button size="small">
                {handler.chosenTheme?.title === topic?.title ? (
                  <p>Deselecteaza</p>
                ) : (
                  <p>Selecteaza</p>
                )}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}
