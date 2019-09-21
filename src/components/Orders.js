import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  const [show, setShow] = React.useState(false);

  function handleClick() {
    setShow(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setShow(false);
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary" onClick={handleClick}>בננה</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">הוספת בננה</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
        </Grid>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary">
         מנגו
          </Button>
        </Grid>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          תות
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid container item xs={10} spacing={5} justify="center" alignItems="center">
          <FormRow />
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
    </div>
  );
}










