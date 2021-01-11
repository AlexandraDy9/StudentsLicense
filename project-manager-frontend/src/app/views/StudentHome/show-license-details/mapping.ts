import {connect} from "react-redux";
import ShowLicenseDetails from "./ShowLicenseDetails";

const mapStateToProps = (state: any) => ({
  literals: state.literals,
  student: state.students.student
});


export const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLicenseDetails);
