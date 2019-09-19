import React from 'react';
import './App.css';
import clsx from 'clsx';
import {Button, Grid,} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import BusinessIcon from '@material-ui/icons/Business';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(0.5),
   
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
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
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            בית אריזה
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-label="main app folders">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="בית" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CardTravelIcon />
          </ListItemIcon>
          <ListItemText primary="הזמנות" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="מלאי" />
        </ListItem>
      </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Grid container spacing={10} justify="center" alignItems="center">
        <Grid container item xs={10} spacing={5} justify="center" alignItems="center">
          <FormRow />
        </Grid>
      </Grid>
      </main>
    </div>
  );
}



