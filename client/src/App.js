import React from 'react';  //me falto eso!!!
import './App.css';
import Home from '../../client/src/components/Home.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../../client/src/components/LandingPage.js';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact  path="/home" component={Home}/> 
   </BrowserRouter>
   </div>      
  );
}
export default App;

