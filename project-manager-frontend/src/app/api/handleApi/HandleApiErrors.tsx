import * as React from "react";
import { useEffect } from "react";
import { ERROR_TIMEOUT } from "../../variables/constants";
import { connect } from "react-redux";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";

export function HandleApiErrors(props: any) {
  const { studentsError, teachersError, usersError } = props;

  const [error, setError] = React.useState(null);

  useEffect(() => {
    let errorValue = null;
    errorValue = studentsError || teachersError || usersError || null;

    setError(errorValue);
  }, [teachersError, studentsError, usersError]);

  return (
    <div>
      {error !== null && (
        <CustomSnackbar
          autoHideDuration={ERROR_TIMEOUT}
          place={"br"}
          message={error}
          color={"error"}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  studentsError: state.students.error,
  teachersError: state.teachers.error,
  usersError: state.users.error,
});

export default connect(mapStateToProps, null)(HandleApiErrors);
