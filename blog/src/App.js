import About from './Contact/About';
import Home from './Contact/Home';
import Javascript from './Contact/Javascript';
import React from "react";
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
            
        render(){
  return (
    <Router>
 <div>
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">ReactNative</Link>
            </li>
            <li>
              <Link to="/javascript">Javascript</Link>
            </li>
          </ul>
        </nav>  
    </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/javascript">
            <Javascript />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      
      </div>
    </Router>

  );
  
}
    
}

export default App;



