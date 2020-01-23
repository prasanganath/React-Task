import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import UsersTable from './pages/UsersTable'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <UsersTable />
          </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
