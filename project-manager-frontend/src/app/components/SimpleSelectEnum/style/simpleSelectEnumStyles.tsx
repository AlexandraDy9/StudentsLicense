import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    divSelect: {
      display: 'flex',
      flexDirection: 'column',
      marginTop:'16px'
    }
  })
);
