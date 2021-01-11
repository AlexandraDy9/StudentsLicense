import { fetchGetAllTeachers } from './../../api/TeacherApi';
import {connect} from "react-redux";
import { setCreatedStudent } from "../../api/StudentApi";
import LicenseDetails from "./LicenseDetails";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  student: state.students.student,
  teachers: state.teachers.teachers
});

export const mapDispatchToProps = {
  setCreatedStudent: setCreatedStudent,
  getAllTeachers: fetchGetAllTeachers
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseDetails);
