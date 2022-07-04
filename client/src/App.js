import './App.css';
import Home from '../../client/src/components/Home.js';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from '../../client/src/components/LandingPage.js';;

function App() {
  return (
    <>
    <div >
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
    </div>
    </>
    
  );
}

export default App;

