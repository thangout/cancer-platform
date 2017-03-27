import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import InputModal from './InputModal'

import Ribbon from '../awareness-ribbon.png'

const style = {
  width: 100 + '%',
  margin: 20,
  display: 'inline-block',
};

const dash_styleBox1 = {
  width: 50 + '%',
  float: 'left',
}

class Dashboard extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={
              <FlatButton label="Donate" href="https://www.cancer.dk/" />
            } >

            <img style={{width: '2%', height: '2%'}} src={Ribbon} />
             <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem primaryText="Dashboard" href='./#/dash' />
                <MenuItem primaryText="Profile"  href='./#/profile'/>
              </IconMenu>
            </AppBar>

            <div className="container">
              <div style={dash_styleBox1}>
                <Card style={{marginTop: '20px'}}>
                  <CardTitle title="What is on your mind?" />
                      <div style={{padding: '20px'}}>
                        <TextField
                          hintText="The chemo therpy treatment went well"
                          defaultValue=""
                          fullWidth={true}
                        /><br />
                      </div>
                  <CardActions>
                    <RaisedButton primary={true} label="Send" />
                  </CardActions>
                </Card>
                <br/>
                <Card>
                  <CardTitle title="Tom has offered to pick groceries from Fotex on Monday 12.3.2017" subtitle="20 min ago" />
                  <CardActions>
                    <RaisedButton primary={true} label="Accept" />
                    <RaisedButton secondary={true} label="Decline" />
                  </CardActions>
                </Card>
                <br/>
                <Card>
                  <CardTitle title="Anna is coming over to clean the garden " subtitle="7 hours ago" />
                </Card>
                <br/>
                <Card>
                  <CardTitle title="Emma just went to a Blood test and she feels well" subtitle="9 hours ago" />
                </Card>
              </div>
              <div style={dash_styleBox1}>

                <Paper style={style} zDepth={1}>
                    <List>
                    <h3 style={{paddingLeft: '15px'}}>Treatment progress</h3>
                    <ListItem
                      rightIcon={<ActionInfo />}
                      primaryText="Blood test"
                      secondaryText="Mar 26, 2017"
                      href="https://en.wikipedia.org/wiki/Blood_test"
                    />
                    <ListItem
                      rightIcon={<ActionInfo />}
                      primaryText="Chemotherapy 1"
                      secondaryText="Jun 17, 2017"
                      href="https://cs.wikipedia.org/wiki/Chemoterapie"
                    />
                  </List>
                  <div className="buttonContainer">
                    <RaisedButton href="./#/timeline" label="See more" />
                  </div>
                </Paper>
                <Paper style={style} zDepth={1}>

                    <List>
                    <h3 style={{paddingLeft: '15px'}}>Recent tasks</h3>
                    <ListItem
                      primaryText="Pick up groceries at Fakta"
                      secondaryText="Jan 9, 2017"
                    />
                    <ListItem
                      primaryText="Fix the leaking pipe in the bathroom"
                      secondaryText="Jan 17, 2017"
                    />
                    <ListItem
                      primaryText="Work"
                      secondaryText="Jan 28, 2014"
                    />
                  </List>
                  <div className="buttonContainer">
                    <RaisedButton label="Add new task"  href="./#/NewTask" />
                  </div>
                </Paper>
              </div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
