import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage';

function App() {
  return(
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>

        </Switch>
      </Router>
    </div>
  )
}

export default App;