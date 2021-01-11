import { fetchGetStudentDetails } from './../../api/StudentApi';
import {connect} from "react-redux";
import { fetchAddStudentLicense } from "../../api/StudentApi";
import ChooseLicense from "./ChooseLicense";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  student: state.students.student
});


export const mapDispatchToProps = {
  handleAddStudentLicense: fetchAddStudentLicense,
  getStudent: fetchGetStudentDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLicense);
