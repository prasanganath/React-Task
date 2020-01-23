import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import app from 'firebase/app';

// Material UI components
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.auth = app.auth();
  }

  signIn = (e) => {
    e.preventDefault();
    this.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
      .then(res => {
        // save token here
        this.props.history.push('/users');
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container maxWidth="sm" style={styles.root}>
        <Paper variant="outlined">
          <Box m={5}>
            <h1 style={{ marginBottom: '25px', color: '#c9d7f9' }}>Sign In</h1>
            <form onSubmit={this.signIn}>
              <Grid container spacing={3} >
                <Grid item sm={12}>
                  <TextField fullWidth variant="outlined" inputRef={input => { this.username = input }} label="Username" />
                </Grid>
                <Grid item sm={12}>
                  <TextField type="password" fullWidth variant="outlined" inputRef={input => { this.password = input }} label="Password" />
                </Grid>
                <Grid item sm={12}>
                  <Button fullWidth size="large" variant="contained" type="submit" color="primary">Sign In</Button>
                </Grid>
              </Grid>
              <p align="center" style={{ marginBottom: '0px' }}>Don't you have an account ?</p>
              <Link to="/signup" style={styles.link}>
                Create new account
              </Link>
            </form>
          </Box>
        </Paper>
      </Container>
    )
  }
}

const styles = {
  root: {
    height: '100vh',
    paddingLeft: '100px',
    paddingRight: '100px',
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    color: '#c9d7f9',
    textDecoration: 'unset'
  }
}

export default withRouter(SignIn);
