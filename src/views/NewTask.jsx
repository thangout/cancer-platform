import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';

import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

import Home from '../003-home.png'
import Pet from '../001-sitting-dog.png'
import Pencil from '../pencil.png'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginTop: 20 + 'px',
  width: 30 + '%',
  marginRight: 20 + 'px',
  display: 'inline-block',
};

class NewTask extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

        <div className="container">
                <Paper style={style} zDepth={1}>
                    <List>
                    <img src={Home} className="taskIcon"/>
                    <Subheader style={{paddingLeft: 0}}>Household</Subheader>
                    <ListItem
                      primaryText="Clean the restroom"
                    />
                    <ListItem
                      primaryText="Fix the leaking pipe in the bathroom"
                    />
                    <ListItem
                      primaryText="Clean windows"
                    />
                  </List>
                  <div className="buttonContainer">
                  <FloatingActionButton  href="./#/newtaskconfirm" >
                    <ContentAdd />
                  </FloatingActionButton>
                  </div>
                </Paper>

                <Paper style={style} zDepth={1}>
                    <List>
                    <img src={Pet} className="taskIcon"/>
                    <Subheader style={{paddingLeft: 0}}>Pets</Subheader>
                    <ListItem
                      primaryText="Buy new food for my dog"
                      href="./#/newtaskconfirm"
                    />
                    <ListItem
                      primaryText="Walk my dog in the afternoon"
                    />
                    <ListItem
                      primaryText="Taking my doggy to a veterinar"
                    />
                  </List>
                  <div className="buttonContainer">
                  <FloatingActionButton  href="./#/newtaskconfirm" >
                    <ContentAdd />
                  </FloatingActionButton>
                  </div>
                </Paper>

                <Paper style={style} zDepth={1}>
                    <List>
                    <img src={Pencil} className="taskIcon"/>
                    <Subheader style={{paddingLeft: 0}}>Other</Subheader>
                    <ListItem
                      primaryText="Going out for a movie"
                    />
                    <ListItem
                      primaryText="Buy batteries from Fakta"
                    />
                    <ListItem
                      primaryText="Sharpen knife from kitchen"
                    />
                  </List>
                  <div className="buttonContainer">
                  <FloatingActionButton  href="./#/newtaskconfirm" >
                    <ContentAdd />
                  </FloatingActionButton>
                  </div>
                </Paper>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default NewTask;
