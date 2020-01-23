import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Material UI components
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

class SignUp extends Component {
  render() {
    return (
      <Container maxWidth="md" style={styles.root}>
        <Paper variant="outlined">
          <Box m={5}>
            <h1 style={{ marginBottom: '25px', color: '#c9d7f9' }}>Sign Up</h1>
            <form noValidate autoComplete="off">
              <Grid container spacing={3} >
                <Grid item lg={6}>
                  <TextField fullWidth variant="outlined" label="First Name" />
                </Grid>
                <Grid item lg={6}>
                  <TextField fullWidth variant="outlined" label="Last name" />
                </Grid>
                <Grid item lg={12}>
                  <TextField type="email" fullWidth variant="outlined" label="Email" />
                </Grid>
                <Grid item lg={6}>
                  <TextField type="password" fullWidth variant="outlined" label="Password" />
                </Grid>
                <Grid item lg={6}>
                  <TextField type="password" fullWidth variant="outlined" label="Confirm Pasword" />
                </Grid>
                <Grid item lg={6}></Grid>
                <Grid item lg={6}>
                  <Button fullWidth size="large" variant="contained" onClick={(e) => this.props.history.push('/signin')} color="primary">Sign Up</Button>
                </Grid>
              </Grid>
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
  }
}

export default withRouter(SignUp);
