import { fetchGetTeacher, fetchChangeStudentNote } from './../../api/TeacherApi';
import {connect} from "react-redux";
import TeacherHome from "./TeacherHome";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  teacher: state.teachers.teacher
});


export const mapDispatchToProps = {
  getTeacher: fetchGetTeacher,
  setStudentNote: fetchChangeStudentNote
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHome);
