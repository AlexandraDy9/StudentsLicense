import { fetchGetAllTeachers } from './../../api/TeacherApi';
import { fetchAddStudentCoordinator, fetchGetStudentDetails } from './../../api/StudentApi';
import {connect} from "react-redux";
import StudentHomeView from "./StudentHome";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  student: state.students.student,
  teachers: state.teachers.teachers
});


export const mapDispatchToProps = {
  getAllTeachers: fetchGetAllTeachers,
  getStudentDetails: fetchGetStudentDetails,
  handleUpdateStudentCoordinator: fetchAddStudentCoordinator
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentHomeView);
