import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import dashboardStyle from "../../../vendor/material-dashboard-react/views/dashboardStyle";
import * as PropTypes from 'prop-types'
import {useEffect} from "react";

const useStyles = makeStyles(dashboardStyle as any);

export default function AnalyticsView(props: any) {
  const classes = useStyles({} as any);

  useEffect(() => {
  }, []);

  return (
    <div>
      <p>Asset: </p>
    </div>
  );
}

AnalyticsView.propTypes = {
};
