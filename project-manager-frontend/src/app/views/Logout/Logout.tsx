import * as React from "react";
import Loader from "../../components/Loader/Loader";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { fetchLogout } from "../../api/UserApi";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: "45vh",
  },
}));

export function Logout({fetchLogout}: any) {
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    fetchLogout();
    setTimeout(() => {
      localStorage.clear();
      history.push("/admin/login");
    }, 1000);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Loader />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
});


export const mapDispatchToProps = {
  fetchLogout: fetchLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
