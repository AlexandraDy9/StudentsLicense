import * as React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  LinearProgress,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import { TotalNumberOfStudentsProps } from "./types";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.green[900],
  },
  differenceValue: {
    color: colors.green[900],
  },
}));

export const TotalNumberOfStudents = ({numberOfStudents, totalNumberOfStudents}: TotalNumberOfStudentsProps) => {
  const classes = useStyles();

  const calculatePercentage = () => {
    let percentage = (numberOfStudents / totalNumberOfStudents) * 100;
    return Math.round((percentage + Number.EPSILON) * 100) / 100;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography color="textSecondary" gutterBottom variant="h6">
              NUMAR TOTAL DE STUDENTI
            </Typography>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textPrimary" variant="h3">
              {numberOfStudents} / {totalNumberOfStudents}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" alignItems="center">
          <Typography className={classes.differenceValue} variant="body2">
            {calculatePercentage()} %
          </Typography>

        </Box>
        <Box mt={2}>
        <LinearProgress
            value={calculatePercentage()}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};
