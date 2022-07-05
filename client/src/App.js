import './App.css';
import Home from '../../client/src/components/Home.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from '../../client/src/components/LandingPage.js';;

function App() {
  return (
    <BrowserRouter>
    <div clasName='App'>
  
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
  

    </div>
   
    
    </BrowserRouter>
     
   
 
    
  );
}

export default App;

