import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { getUsers } from "../actions"
import { Link } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
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
  verticallyCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  border: {
    border: '1px dashed grey',
    padding: '20px'
  },
  table: {
    minWidth: 650,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    color: '#c9d7f9',
    textDecoration: 'unset'
  },
  button: {
    marginRight: 500
  }
}));

// function createData(name, role, email, createdOn, status) {
//   return { name, role, email, createdOn, status };
// }

// const rows = [
//   createData('Andrew', 'admin', 'abc@gmail.com', '2018/05/02', 'active'),
// ];

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    props.getUsers();
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

//   console.log(props.users)

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="inherit"
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
            Title
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
        <List>
          {['Account Management'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          {[''].map((text, index) => (
            <ListItem button key={text}>
             
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
             
              <Button size="large" color="" href="/signin">Sign Out</Button>
            </ListItem>
          ))}

        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <h2>Account Management</h2>

        
              <Button size="large" variant="contained" color="primary" href="/home">Add New Account</Button>
             

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">

            <TableHead>
              <TableRow>

                <TableCell>Name</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Email&nbsp;(g)</TableCell>
                <TableCell align="right">CreatedOn&nbsp;(g)</TableCell>
                <TableCell align="right">Status&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(props.users.data).map((row, i) => (
                <TableRow key={row.name} key={i}>
                  <TableCell component="th" scope="row">
                    {row.firstName + row.lastName}
                  </TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.CreatedOn}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div >
  );
}

const mapStateToProps = state => ({
  users: state.data
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
