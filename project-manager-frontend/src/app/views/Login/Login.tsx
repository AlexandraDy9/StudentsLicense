import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { HandlerProps, LoginProps } from './types';
import { useHandlers } from './useHandlers';

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
    width: "40%"
  },
  container: {
    display: "flex",
    justifyContent: "space-around"
  },
}));

export default function LoginView(props: LoginProps) {
  const classes = useStyles();
  const handler: HandlerProps = useHandlers(props);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img style={{width: 60, paddingBottom: 15}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJG39W7gwcf9IZ8iqHJY65kU1tRUhKgrCS0w&usqp=CAU"/>
        <Typography component="h1" variant="h5">
          Autentificare
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Adresa de email"
            name="email"
            onChange={handler.handleEmailChanged}
            autoComplete="email"
            autoFocus
            error={handler.validateEmail()}
            helperText={handler.validateEmail() ? 'Email-ul trebuie sa contina @student.unitbv.ro sau @unitbv.ro' : ' '}
            />
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
          <div className={classes.container}>
            <Button
              type="submit"
              fullWidth
              disabled={handler.validateEmail() || handler.password === ""}
              variant="contained"
              color="primary"
              onClick={handler.handleSubmit}
              className={classes.submit}
            >
              Autentificare
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handler.handleOpenRegisterPage}
              className={classes.submit}
            >
              Inregistrare
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
