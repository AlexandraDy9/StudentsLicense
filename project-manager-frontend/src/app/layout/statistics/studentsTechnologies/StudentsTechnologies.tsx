import * as React from "react";
// import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Typography,
} from "@material-ui/core";
import { StudentsTechnologiesProps } from "./types";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const StudentsTechnologies = ({ students }: StudentsTechnologiesProps) => {
  const classes = useStyles();
  const theme = useTheme();

  const getData = () => {
    let counts: any = [];

    students.map((student) => {
      student.license.technologies.map((tech) => {
        counts[tech] = counts[tech] ? counts[tech] + 1 : 1;
      });
    });

    return counts;
  };

  const getPercentages = () => {
    let counts: any = getData();
    counts.map((value: any, key: any) => {
      counts[key] = (value / students.length) * 100;
    });

    return counts;
  };

  const getColors = () => {
    let counts: any = getData();
    let colors: any = [];
    counts.map((value: any, key: any) => {
      colors[key] = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    return colors;
  };

  const getTechonologies = () => {
    let counts: any = getData();
    let tech: any = [];
    counts.map((value: any, key: any) => {
      tech.push({
        title: Object.keys(counts)[key],
        value: (value / students.length) * 100,
      })
    });

    return tech;
  }

  const data = {
    datasets: [
      {
        data: getPercentages(),
        backgroundColor: getColors(),
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: Object.keys(getData()),
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Tehnologiile folosite" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          {/* <Doughnut
            data={data}
            options={options}
          /> */}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {getTechonologies().map((tech: any) => (
            <Box
              key={tech.title}
              p={1}
              textAlign="center"
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {tech.title}
              </Typography>
              <Typography
                variant="h2"
              >
                {tech.value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
