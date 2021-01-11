import * as React from "react";
import { TeacherPendingListProps } from "./types";
//styles
import "./styles/TeacherPendingList.scss";
import { cn } from "../../utils";
import { useHandlers } from "./useHandlers";
import {
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
import ColoredButton from "../../components/ColoredButton/ColoredButton";
import { Student } from "../../models";

const bem = cn("teacher-pending-list");

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

  description: {
    width: 200,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

// const students = [
//   {
//     student: "Diana Alexandra Nica",
//     title: "Recunoastere vizuala de dactileme",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor felis mauris, non fringilla turpis vestibulum et. Proin nec pellentesque mauris. Nulla vel pharetra magna. Nullam molestie nunc a elit luctus, in efficitur odio pellentesque. Quisque sollicitudin efficitur tincidunt. Quisque nunc justo, elementum ac leo id, mattis elementum dolor. ",
//   },
//   {
//     student: "Cosmin Florin Popica",
//     title: "Sisteme educationale inteligente",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor felis mauris, non fringilla turpis vestibulum et. Proin nec pellentesque mauris. Nulla vel pharetra magna. Nullam molestie nunc a elit luctus, in efficitur odio pellentesque. Quisque sollicitudin efficitur tincidunt. Quisque nunc justo, elementum ac leo id, mattis elementum dolor. ",
//   },
// ];

export default function TeacherPendingList(props: TeacherPendingListProps) {
  const { teacher, changeStudentStatus } = props;
  const handler = useHandlers(props);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Student</StyledTableCell>
              <StyledTableCell align="left">Titlu licenta</StyledTableCell>
              <StyledTableCell align="left">
                Descrierea licentei
              </StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teacher?.students?.length === 0 &&
              <p className={bem("message-empty")}>Nu aveti niciu student in asteptare.</p>
            }
            {teacher?.students?.filter((student) => student?.license?.status === "pending")?.map((student: Student) => (
              <StyledTableRow>
                <StyledTableCell align="left">
                  {student?.firstName + " " + student?.lastName}
                </StyledTableCell>
                <StyledTableCell align="left">{student?.license?.title}</StyledTableCell>
                <StyledTableCell align="left" className={classes.description}>
                  {student?.license?.description}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <ColoredButton backgroundColor={"green"} title={"Accepta"} onClick={() => changeStudentStatus(true, student)}/>
                  <ColoredButton backgroundColor={"red"} title={"Refuza"} onClick={() => changeStudentStatus(false, student)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
