import * as React from "react";
import { useEffect } from "react";
import { ERROR_TIMEOUT } from "../../variables/constants";
import { connect } from "react-redux";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";

export function HandleApiSuccess(props: any) {
  const { teachersSuccess, studentsSuccess, usersSuccess } = props;

  const [success, setSuccess] = React.useState(null);

  useEffect(() => {
    let successValue = null;
    successValue = teachersSuccess !== null ? teachersSuccess : null;

    if (successValue === null) {
      successValue = studentsSuccess !== null ? studentsSuccess : null;
    }

    if (successValue === null) {
      successValue = usersSuccess !== null ? usersSuccess : null;
    }

    setSuccess(successValue);
  }, [teachersSuccess, studentsSuccess, usersSuccess]);

  return (
    <div>
      {success !== null && (
        <CustomSnackbar
          autoHideDuration={ERROR_TIMEOUT}
          place={"br"}
          message={success}
          color={"success"}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  teachersSuccess: state.teachers.success,
  studentsSuccess: state.students.success,
  usersSuccess: state.users.success,
});

export default connect(mapStateToProps, null)(HandleApiSuccess);
