// app.js


{/* import React from 'react';
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


*/}



//header


{/*  
import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
function Header() {
    return (
        <Nav>
            <Link to='/'>
          <Logo src =" https://pngimg.com/uploads/polar_bear/polar_bear_PNG23.png "  />   
          </Link>
           <NavMenu>
               <Link to="/Home" className="navbar-item">
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>HOME</span>
               </Link>
               <Link to="/About" className="navbar-item">
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>ABOUT</span>
               </Link>
               <Link to="/Entrepreneur" className="navbar-item">
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>ENTREPRENEUR</span>
               </Link>
               <Link to="/Investor" className="navbar-item">
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>INVESTOR</span>
               </Link>
               <Link to="/Mentors" className="navbar-item">
                   <img src="/images/home-icon.svg" alt="" />
                   <span>MENTORS</span>
               </Link>
               <Link to="/Register" className="navbar-item">
                   <img src="/images/home-icon.svg" alt=""/>
                   <span>REGISTER</span>
               </Link>
           </NavMenu>
           <Link to="/Login" className="navbar-item">
           <UserImg src="https://image.flaticon.com/icons/png/512/310/310818.png" />
            </Link>
        </Nav>
    )
}

export default Header


const Nav = styled.div`
  height: 70px;
  background: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;

`;

const Logo = styled.img`
  width: 80px;


`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left:25px;
  margin-right: 25px;
  align-items : center;
  a {

    display: flex;
    align-items :center;
    padding: 0 12px;
    cursor : pointer;
    img {
        height: 20px;

    }

    Link{
        background:white;
    }


    span{
        color:white;
        font-size : 17px;
        letter-spacing: 1.42px;
        position:relative;
        
        &:after {
            content :"";
            height: 2px;
            background: white;
            position:absolute;
            left: 0;
            right:0;
            bottom: -6px;
            opacity:0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }

  }

`;

const UserImg = styled.img`
  background: white;
  width: 48px;
  height : 48px;
  border-radius: 50%;
  cursor : pointer;


`;







*/}

// index.js

{/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/}


