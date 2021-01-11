import { fetchGetTeacher, fetchChangeStudentStatus } from './../../api/TeacherApi';
import { connect } from "react-redux";
import TeacherPendingList from "./TeacherPendingList";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  teacher: state.teachers.teacher
});


export const mapDispatchToProps = {
  getTeacher: fetchGetTeacher,
  changeStudentStatus: fetchChangeStudentStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPendingList);
