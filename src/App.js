import React from 'react';
import './App.css';
import {Button, Grid, Paper, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 500,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          Hello World
          </Button>
        </Grid>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          Hello World
          </Button>
        </Grid>
        <Grid item xs={4} justify="center" alignItems="center">
        <Button variant="contained" color="primary">
          Hello World
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid container item xs={10} spacing={5} justify="center" alignItems="center">
          <FormRow />
        </Grid>
        <Grid container item xs={10} spacing={5} justify="center" alignItems="center">
          <FormRow />
        </Grid>
        <Grid container item xs={10} spacing={5} justify="center" alignItems="center">
          <FormRow />
        </Grid>
      </Grid>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    </div>
  );
}

function App() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
          <Button variant="contained" color="primary">
          Hello World
          </Button>
    </Grid>
     
      
  );
}


