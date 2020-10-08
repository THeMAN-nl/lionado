import React from 'react';
import './App.css';
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
        <Route path="/" exact component={Home}/>
    </Router>
      
    </div>
  );
}

export default App;
