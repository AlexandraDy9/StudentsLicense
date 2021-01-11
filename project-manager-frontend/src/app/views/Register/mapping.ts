import { connect } from "react-redux";
import { fetchRegister } from "../../api/UserApi";
import RegisterView from "./Register";

const mapStateToProps = (state: any) => ({});

export const mapDispatchToProps = {
  fetchRegister: fetchRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
