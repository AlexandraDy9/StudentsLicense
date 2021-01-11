import { fetchGetAllTeachersProjects } from './../../api/TeacherApi';
import {connect} from "react-redux";
import ChooseTheme from "./ChooseTheme";
import { setCreatedStudent } from '../../api/StudentApi';

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  projects: state.teachers.projects,
  student: state.students.student
});

export const mapDispatchToProps = {
  getAllTopics: fetchGetAllTeachersProjects,
  setCreatedStudent: setCreatedStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTheme);
