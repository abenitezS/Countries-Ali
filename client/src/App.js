import React from 'react';  //me falto eso!!!
import './App.css';
import Home from '../../client/src/components/Home.js';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../../client/src/components/LandingPage.js';
import CreateActivity from '../../client/src/components/CreateActivity';

function App() {
  return (
     <BrowserRouter>
   <div className='App'>
   
    <Switch>
       <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/> 
        <Route path='/activity' component={CreateActivity} />
    </Switch>
   
   </div>
    </BrowserRouter>     
  );
}
export default App;

