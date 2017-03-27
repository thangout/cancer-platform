import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const style = {
  height:  350,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 20 +'px',
  paddingTop: 40 +'px',
};

class Login extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <Paper style={style} zDepth={1}>
                <h1>Login</h1>
                <TextField
                  hintText="Name"
                /><br />
                <br />
                <TextField type="password"
                  hintText="Password"
                /><br />
                <br />
                <RaisedButton label="Log in" href="./#/dash" />
                <RaisedButton label="Register" href="./#/register" />
            </Paper>
          <p className="App-intro">
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
