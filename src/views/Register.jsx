import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';


const style = {
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 20 +'px',
  paddingTop: 40 +'px',
};

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};


class Register extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <Paper style={style} zDepth={1}>
                <h1>Register</h1>
                <TextField
                  hintText="Name"
                  defaultValue=""
                /><br />
                <br />
                <TextField
                  hintText="Last name"
                  defaultValue=""
                /><br />
                <br />
                <TextField
                  hintText="Age"
                  defaultValue=""
                /><br />
                <br />
                <Toggle
                  label="Have children"
                  style={styles.toggle}
                />
                <Toggle
                  label="Live in a house"
                  style={styles.toggle}
                />
                <Toggle
                  label="Own a pet"
                  style={styles.toggle}
                />
                <RaisedButton label="Register " href="./#/dash" />
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Register;
