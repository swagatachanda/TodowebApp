import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Snackbarcontext = React.createContext()

export default function CustomizedSnackbars({children}) {
  const classes = useStyles();


  const [StateSnackbar, SetSnakcbar] = React.useState({
      open: false,
      severity: "",
      message: ""
  })


  const setstatesnackbercontext = (open, message, severity) => SetSnakcbar({...StateSnackbar, open, message, severity})

  const handleClose = () => SetSnakcbar({ ...StateSnackbar, open: false})


  const {open, severity, message} = StateSnackbar

  return (
      <Snackbarcontext.Provider value={setstatesnackbercontext}>
    <div className={classes.root}> 
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
    {children}
    </Snackbarcontext.Provider>
  );
}
