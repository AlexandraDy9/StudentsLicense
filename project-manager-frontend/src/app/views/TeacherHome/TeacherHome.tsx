import * as React from "react";
import { TeacherHomeProps } from "./types";
//styles
import { cn } from "../../utils";
import { useHandlers } from "./useHandlers";
import { Fab, makeStyles, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ShowLicenseDetails from "../StudentHome/show-license-details/ShowLicenseDetails";
import { GridContainer, GridItem } from "../../components/Grid";
import CreateIcon from "@material-ui/icons/Create";

import "./styles/TeacherHome.scss";
import { TotalNumberOfStudents } from "../../layout/statistics/totalNumerOfStudents/TotalNumberOfStudents";
import TeacherThemes from "../TeacherThemes/mapping";
import { CustomModalSimple } from "../../components/Modal";
import SaveButton from "../../components/SaveButton/SaveButton";

const bem = cn("teacher-home");

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    padding: "20px 20px",
    backgroundColor: "white",
  },
  table: {
    minWidth: 500,
  },

  description: {
    width: 200,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

function Row(props: any) {
  const { student, literals, index, handler } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {handler.addModalVisibility && (
        <CustomModalSimple
          width={"none"}
          onClose={() => handler.handleAddModalVisibility(false)}
          modalVisibility={handler.addModalVisibility}
          putExitButton={true}
          title={"Adaugare nota"}
        >
          <React.Fragment>
            <div className={bem("text-field-container")}>
              <TextField
                style={{marginBottom: "20px"}}
                type="number"
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 100,
                  },
                }}
                className={bem("text-field")}
                label={"Nota"}
                variant="outlined"
                onChange={handler.handleStudentNote}
              />
            </div>
            <SaveButton onClick={() => handler.saveStudentNote(student)} />
          </React.Fragment>
        </CustomModalSimple>
      )}
      <TableRow key={student?.user?.eMail}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{index + 1}</TableCell>
        <TableCell align="left">
          {student?.firstName + " " + student?.lastName}
        </TableCell>
        <TableCell align="left">{student?.license?.title}</TableCell>
      </TableRow>
      <TableRow key={student?.eMail}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className={bem("collapse-content-header")}>
                <Typography variant="h6" gutterBottom component="div">
                  Detalii lucrare
                </Typography>

                {student?.license?.note === null ? (
                  <Fab variant="extended" color="primary" onClick={() => handler.handleAddModalVisibility(true)}>
                    <CreateIcon /> Noteaza
                  </Fab>
                ) : (
                  <Typography variant="h6" gutterBottom component="div">
                    Nota {student?.license?.note}
                  </Typography>
                )}
              </div>
              <ShowLicenseDetails literals={literals} student={student} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TeacherHome(props: TeacherHomeProps) {
  const { literals, teacher } = props;
  const handler = useHandlers(props);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={6} md={6} sm={6}>
          <GridContainer>
            <GridItem xs={12} md={12} sm={12}>
              <TotalNumberOfStudents
                numberOfStudents={teacher?.students?.filter((student) => student?.license?.status === "accepted").length}
                totalNumberOfStudents={6}
              />
            </GridItem>
            <GridItem xs={12} md={12} sm={12}>
              <Typography variant="h6" id="tableTitle" component="div">
                Studenti
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align="left">Numar</TableCell>
                      <TableCell align="left">Nume si Prenume</TableCell>
                      <TableCell align="left">Titlu licenta</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teacher?.students?.length === 0 &&
                      <p className={bem("message-empty")}>Nu aveti niciu student.</p>
                    }
                    {teacher?.students?.filter((student) => student?.license?.status === "accepted")?.map((student, key) => (
                      <Row
                        handler={handler}
                        key={student?.email}
                        student={student}
                        literals={literals}
                        index={key}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </GridItem>
          </GridContainer>
        </GridItem>

        <GridItem xs={6} md={6} sm={6}>
          <TeacherThemes />
        </GridItem>
      </GridContainer>
    </div>
  );
}
