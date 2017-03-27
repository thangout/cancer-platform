import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Timeline from 'react-visjs-timeline'

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';



import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  height:  400,
  width: 100 + '%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 20 +'px',
};

const style2 = {
  width: 100 + '%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 20 +'px',
};

const options = {
  width: '100%',
  height: '200px',
  stack: true,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: 'background',
  format: {
    minorLabels: {
      minute: 'h:mma',
      hour: 'ha'
    }
  }
}

const items = [
    {
      start: new Date(2017,3, 20),
      end: new Date(2017, 3 , 21),  // end is optional
      content: 'Fifth chemo therapy, http://cancer-donate.dk',
    },

    {
      start: new Date(2017, 3, 1, 16, 0, 0, 0),
      end: new Date(2017, 3 , 3, 17, 30, 0, 0),  // end is optional
      content: 'Chemo 4',
    },
]

const events = [
    {
      start: new Date(2017, 2, 26, 10, 30, 0, 0),
      end: new Date(2017, 2 , 26, 12, 30, 0, 0),  // end is optional
      title: 'First chemo',
       desc: 'Walk a dog',
    },
    {
      start: new Date(2017, 2, 27, 12, 0, 0, 0),
      end: new Date(2017, 2 , 27, 13, 30, 0, 0),  // end is optional
      title: 'Lunch',
       desc: 'Making pasta and pesto',
    },
    {
      start: new Date(2017, 2, 31, 16, 0, 0, 0),
      end: new Date(2017, 2 , 31, 17, 30, 0, 0),  // end is optional
      title: 'Shopping at Netto',
       desc: 'Buy groceries at Netto',
    },
    {
      start: new Date(2017, 3, 1, 9, 0, 0, 0),
      end: new Date(2017, 3 , 1, 10, 30, 0, 0),  // end is optional
      title: 'Chemo 4',
       desc: 'Buy groceries at Netto',
    },
    // {
    //   start: new Date(2017, 3, 31),
    //   end: new Date(2017, 3, 31),  // end is optional
    //   title: 'Second chemo',
    // },
]

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class TimelineS extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SammenHoldet"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

            <div className="container">
            <Paper style={style} zDepth={1}>
                <h1>Treatment overview</h1>
               <Timeline
                  options={options}
                  items={items}
                />
                <br/>
                <FloatingActionButton>
                  <ContentAdd />
                </FloatingActionButton>
            </Paper>

            <Paper style={style2} zDepth={1}>
                <h1>Task overview</h1>
                 <BigCalendar
                  selectable
                  events={events}
                  defaultView='week'
                  defaultDate={new Date()}
                />
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TimelineS;

