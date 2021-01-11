import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { HandlerProps, RegisterProps } from './types';
import { useHandlers } from './useHandlers';
import Select from 'react-select';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: "-200px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: "flex"
  },
  field: {
    marginRight: "10px"
  }
}));

export default function RegisterView(props: RegisterProps) {
  const classes = useStyles();
  const handler: HandlerProps = useHandlers(props);
  const selectStyles = {
    control: (provided: any) => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img style={{width: 60, paddingBottom: 15}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJG39W7gwcf9IZ8iqHJY65kU1tRUhKgrCS0w&usqp=CAU"/>
        <Typography component="h1" variant="h5">
          Inregistrare
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            onChange={handler.handleNameChanged}
            autoFocus
          />
          <div className={classes.container}>
            <TextField
              className={classes.field}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Prenume"
              onChange={handler.handleFirstNameChanged}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Nume"
              onChange={handler.handleLastNameChanged}
              autoFocus
            />
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Parola"
            onChange={handler.handlePasswordChanged}
            type="password"
            autoComplete="current-password"
          />
          <Select
            autoFocus
            options={[
              { value: "Student", label: "Student" },
              { value: "Profesor", label: "Profesor" },
            ]}
            onChange={handler.handleUserType}
            placeholder="Conectare ca..."
            styles={selectStyles}
          />
          <Button
            fullWidth
            disabled={handler.validateFields()}
            variant="contained"
            color="primary"
            onClick={handler.handleSubmit}
            className={classes.submit}
          >
            Inregistrare
          </Button>
        </form>
      </div>
    </Container>
  );
}
