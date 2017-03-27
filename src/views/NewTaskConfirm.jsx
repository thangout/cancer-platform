import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';

// injectTapEventPlugin();

const style = {
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  // padding: 20 +'px',
  paddingTop: 40 +'px',
  paddingBottom: 40 +'px',
};

const stylesCheck = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class NewTaskConfirm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <Paper style={style} zDepth={1}>
                <h1>Add a new Task</h1>
                <TextField
                  hintText="Title"
                  defaultValue="Buy new food for my dog"
                /><br />
                <br />
                 <DatePicker hintText="Pick date" />
                <br />
                <br />

                <h3>Share with:</h3>
                <FlatButton label="add new group" href="" />
                <br />
                <br />
                <div style={{padding: 50+ 'px', paddingTop: 0}}>
                  <Checkbox
                    label="All"
                    style={stylesCheck.checkbox}
                  />
                  <Checkbox
                    label="Close family (11)"
                    style={stylesCheck.checkbox}
                  />
                  <Checkbox
                    label="Parrents (2)"
                    style={stylesCheck.checkbox}
                  />
                  <Checkbox
                    label="Friends at work (6)"
                    style={stylesCheck.checkbox}
                  />
                </div>
                <RaisedButton label="Submit" href="./#/dash" />
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NewTaskConfirm;
