import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Entrepreneur from "./components/Entrepreneur";
import Investor from './components/Investor';
import  Register  from './components/Register';
import Mentors from "./components/Mentors";
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return (
    <Router>
    <div className="App">
    
      <Switch>
     
      <Route path="/login">
          <Login />
        </Route>

      
      
        <Route path="/about">
        < Header />
          <About />  
          </Route>  
         
           <Route path="/entrepreneur">
             < Header />
          <Entrepreneur />
        </Route>
        
        <Route path="/investor">
          < Header />
          <Investor />
        </Route>
       
        <Route path="/mentors">
            < Header /> 
          <Mentors />
        </Route>
        
        <Route path="/register">
          < Header />
          <Register />
        </Route>
       
        <Route path="/">
          < Header />
       <Home />
        </Route>
    
     </Switch>
      </div>
    </Router>
  );
}

export default App;
