import { fetchUpdateStudentLicense } from './../../../api/StudentApi';
import {connect} from "react-redux";
import EditLicenseDetails from "./EditLicenseDetails";

const mapStateToProps = (state: any) => ({
});


export const mapDispatchToProps = {
  putStudentDetails: fetchUpdateStudentLicense
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLicenseDetails);
