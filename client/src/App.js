import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/homepage';
import CreatePost from './pages/createpost';
import CreateUser from './pages/createuser';
import Login from './pages/login';
import './App.css';

function App() {
  return(
    <div className="App">
      <Router>
        <Link to="/createpost">Create a post</Link>
        <Link to="/">Homepage</Link>
        <Link to="/createuser">Create a user</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/createpost" exact={true} component={CreatePost} />
          <Route path="/createuser" exact={true} component={CreateUser} />
          <Route path="/login" exact={true} component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;