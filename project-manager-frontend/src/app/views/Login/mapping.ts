import { fetchGetStudentDetails } from './../../api/StudentApi';
import {connect} from "react-redux";
import LoginView from "./Login";
import { fetchGetTeacher } from '../../api/TeacherApi';

const mapStateToProps = (state: any) => ({
  student: state.students.student,
  teacher: state.teachers.teacher
});


export const mapDispatchToProps = {
  getStudentDetails: fetchGetStudentDetails,
  getTeacher: fetchGetTeacher
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
