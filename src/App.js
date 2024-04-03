import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Link, Route, and Switch
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Admin from './Components/Admin UI/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={Admin} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
