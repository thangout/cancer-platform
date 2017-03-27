import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, HashRouter } from 'react-router-dom'

import Login from './views/Login'
import Dashboard from './views/Dashboard'
import NewTask from './views/NewTask'
import NewTaskConfirm from './views/NewTaskConfirm'
import Timeline from './views/Timeline'
import Profile from './views/Profile'
import Register from './views/Register'


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


ReactDOM.render((
  <HashRouter>
  	<div>
	    <Route  path="/" component={App}/>
	    {/* add the routes here */}
	    <Route path="/login" component={Login}/>
	    <Route path="/dash" component={Dashboard}/>
	    <Route path="/newtask" component={NewTask}/>
	    <Route path="/newtaskconfirm" component={NewTaskConfirm}/>
	    <Route path="/timeline" component={Timeline}/>
	    <Route path="/profile" component={Profile}/>
	    <Route path="/register" component={Register}/>
  	</div>
  </HashRouter>
), document.getElementById('root'))
