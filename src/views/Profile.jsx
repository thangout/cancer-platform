import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import Sofia from '../sofia.png';


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


class Profile extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <Paper style={style} zDepth={1}>
                <h1>Profile</h1>
                <img src={Sofia} />
                <TextField
                  hintText="Name"
                  defaultValue="Sofia Kelly"
                /><br />
                <br />
                <br />
                <Toggle
                  label="Have children"
                  style={styles.toggle}
                />
                <Toggle
                  label="Live in a house"
                  style={styles.toggle}
                  defaultToggled={true}
                />
                <Toggle
                  label="Own a pet"
                  defaultToggled={true}
                  style={styles.toggle}
                />
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Profile;
