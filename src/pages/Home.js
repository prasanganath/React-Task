import React, { useState } from 'react';
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
import { connect } from "react-redux";
import {addUser} from "../actions"
import { useHistory } from "react-router-dom";

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
  }
}));

function Home(props) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [account, setAccount] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: 'admin',
    password: '',
    CreatedOn: '',
    status: 'created'
  });

  const inputChange = e => {
    let name = e.target.id;
    let value = e.target.value;
    // console.log(props)
    account[name] = value
    setAccount(account);
  }

  const formSubmit = (event) => {
    // const {formValue} = this.formValue
    // const {addUser} = this.props;

    event.preventDefault();
    // addUser({title: formValue});
    // this.setFormValue({formValue: ''});
  }

  const saveUser = function(){
    account['CreatedOn'] = getTimeStamp()
    setAccount(account);
    props.addUser(account)
    history.push("/users");
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function getTimeStamp(){
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var dateString = date + "-" +(month + 1) + "-" + year;
    return dateString;
  }


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

        <h2>Create new account</h2>
        <form onSubmit={formSubmit}>
          <Grid container spacing={3} >
            <Grid item lg={6}>
              <TextField margin="dense" fullWidth variant="outlined" id="username" label="Username" onChange={inputChange} />
            </Grid>
            <Grid item lg={6}></Grid>
            <Grid item lg={6}>
              <TextField margin="dense" fullWidth variant="outlined" id="firstName" label="First name" onChange={inputChange} />
            </Grid>
            <Grid item lg={6}>
              <TextField margin="dense" fullWidth variant="outlined" id="lastName" label="Last name" onChange={inputChange} />
            </Grid>
            <Grid item lg={6}>
              <TextField margin="dense" type="email" fullWidth variant="outlined" id="email" label="Email" onChange={inputChange} />
            </Grid>
            <Grid item lg={6}></Grid>
            <Grid item lg={6}>
              <Select value={1} variant="outlined" margin="dense" fullWidth placeholder="SDsf" id="role" onChange={inputChange}>
                <MenuItem value={1}>Admin</MenuItem>
                <MenuItem value={2}>Manager</MenuItem>
                <MenuItem value={3}>Employee</MenuItem>
              </Select>
            </Grid>
            <Grid item lg={6}></Grid>
            <Grid item lg={6}>
              <TextField margin="dense" type="password" fullWidth variant="outlined" id="password" label="Password" onChange={inputChange} />
            </Grid>
            <Grid item lg={6}>
              <TextField margin="dense" type="password" fullWidth variant="outlined" id="confirmpassword" label="Confirm Password" />
            </Grid>
          </Grid>
          <h3>Permissions</h3>
          <div className={classes.border}>
            <Grid container>
              <Grid item lg={6} style={{ paddingLeft: '12px' }}></Grid>
              <Grid item lg={2} style={{ paddingLeft: '12px' }}>Create</Grid>
              <Grid item lg={2} style={{ paddingLeft: '12px' }}>Edit</Grid>
              <Grid item lg={2} style={{ paddingLeft: '12px' }}>Delete</Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} className={classes.verticallyCenter}>Plan Management</Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} className={classes.verticallyCenter}>Post Management</Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} className={classes.verticallyCenter}>Community Management</Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} className={classes.verticallyCenter}>Store Management</Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item lg={2}>
                <Switch
                  checked={true}
                  value="checkedA"
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
            </Grid>
          </div>
          <Grid container style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Grid item lg={6}></Grid>
            <Grid item lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button size="large" variant="contained" color="primary" onClick={saveUser}>Create Account</Button>
            </Grid>
          </Grid>
        </form>
      </main>
    </div >
  );
}

const mapStateToProps = state => ({
  users: state.data
});

const mapDispatchToProps = dispatch => {
  return {
    addUser: (account) => {
      dispatch(addUser(account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
