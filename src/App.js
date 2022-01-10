import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Routers/HomePage/HomePage'
import Category from './Routers/Category/Category';
import Cart from './Routers/Cart/Cart';
import Navbar from "./Routers/Navbar/Navbar";
import Footer from './Routers/Footer/Footer';
import All from './Routers/All/All';
import './App.css'

function App() {
  return (
    <div className='app-wrapper'>
      
      <div className='content'>
        <Router> 
          
          <Navbar/>
          
          
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/category' component={Category}/>
            <Route exact path='/all' component={All}/>
            <Route exact path='/cart' component={Cart}/>
            {/* <Route exact path='/cart' component={Cart}/> */}

          </Switch>

      </Router>
      </div>
      
      <div className='footer'>  
        <Footer/>
      </div>  
    
    </div>
  );
}

export default App;
