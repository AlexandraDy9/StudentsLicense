import { fetchGetTeacher, fetchAddTeacherProject } from './../../api/TeacherApi';
import { connect } from "react-redux";
import TeacherThemes from "./TeacherThemes";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  teacher: state.teachers.teacher
});

export const mapDispatchToProps = {
  addTeacherProject: fetchAddTeacherProject,
  getTeacher: fetchGetTeacher
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherThemes);
