import * as React from "react";
import { StudentHomeProps, HandlerProps } from "./types";
//styles
import "./styles/StudentLicense.scss";
import { cn } from "../../utils";
import { useHandlers } from "./useHandlers";
import {
  Fab,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Close } from "@material-ui/icons";
import Select from "react-select";
import EditIcon from "@material-ui/icons/Edit";
import ColoredButton from "../../components/ColoredButton/ColoredButton";
import ShowLicenseDetails from "./show-license-details/mapping";
import EditLicenseDetails from "./edit-license-details/mapping";
import { getLocalStorageElement } from "../../localStorage/local-storage";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import { ERROR_TIMEOUT } from "../../variables/constants";
import { CustomModalSimple } from "../../components/Modal";
import SaveButton from "../../components/SaveButton/SaveButton";

const bem = cn("student-license");

const StyledTableCell = withStyles((theme: any) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: any) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    padding: "20px 20px",
    backgroundColor: "white",
  },
  table: {
    minWidth: 500,
  },
});

export default function StudentHomeView(props: StudentHomeProps) {
  const { literals, student } = props;
  const handler: HandlerProps = useHandlers(props);
  const classes = useStyles();
  const selectStyles = {
    control: (provided: any) => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
  };

  const getStatusBackgroundColor = (value: string) => {
    switch(value) {
      case "accepted":
        return "green"
      case "declined":
        return "red"
      case "pending":
         return "gray"
    }
  }

  return (
    student?.license === null ? (
      <CustomSnackbar
        autoHideDuration={ERROR_TIMEOUT}
        place={"br"}
        message={"Trebuie sa va alegeti un proiect."}
        color={"error"}
      />
    ) : (
      <div className={classes.container}>
        {handler.changeTeacherModalVisibility && (
          <CustomModalSimple
            onClose={() => handler.handleChangeTeacherModalVisibility(false)}
            modalVisibility={handler.changeTeacherModalVisibility}
            putExitButton={true}
            title={"Schimbare profesor"}
          >
            <React.Fragment>
              <div className={bem("text-field-container")}>
                <Select
                  autoFocus
                  onChange={handler.handleSelectedTeacher}
                  options={handler.handleGetTeachersOptions()}
                  search
                  placeholder="Profesor coordonator"
                  styles={selectStyles}
                />
              </div>
              <SaveButton onClick={handler.changeTeacher} />
            </React.Fragment>
          </CustomModalSimple>
        )}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Student</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Titlu licenta</StyledTableCell>
                <StyledTableCell align="left">
                  Profesor coordonator
                </StyledTableCell>
                <StyledTableCell align="left">Nota</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="left">
                  {getLocalStorageElement("email")}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <ColoredButton
                    backgroundColor={getStatusBackgroundColor(student?.license?.status)}
                    title={student?.license?.status || "-"}
                  />
                </StyledTableCell>
                <StyledTableCell align="left">{student?.license?.title || "-"}</StyledTableCell>
                <StyledTableCell align="left">{student?.teacher?.firstName + " " + student?.teacher?.lastName || "-"}</StyledTableCell>
                <StyledTableCell align="left">{student?.license?.note || "-"}</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className={bem("fields-container")}>
          {student?.license?.status === "declined" && (
              <div className={bem("edit-button")}>
                <Fab variant="extended" color="primary" onClick={() => handler.handleChangeTeacherModalVisibility(true)}>
                  <EditIcon /> Schimbare profesor
                </Fab>
              </div>
            )
          }

          <div className={bem("edit-button")}>
            <Fab variant="extended" color="primary" onClick={handler.onEditClick}>
              {!handler.isEditMode ? (
                <React.Fragment>
                  <EditIcon /> Editare
                </React.Fragment>
              ) : (
                <Close />
              )}
            </Fab>
          </div>

          {handler.isEditMode ? (
            <EditLicenseDetails
              literals={literals}
              student={student}
              toggleEditMode={handler.onEditClick}
            />
          ) : (
            <ShowLicenseDetails />
          )}
        </div>
      </div>
    )
  );
}
