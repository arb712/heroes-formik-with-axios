import React from 'react';
import './App.css';
import CarD from './components/pages/heroes/FormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import View from './components/pages/view_heroes/index';
import Home from './components/pages/home/index';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <NavBar/>
    //     <br/>
    //     <CarD />
    //     <br/>
    //   </header>
    // </div>

    <Router>
      <div className="App">
        <NavBar/>
        <header className="App-header">
        <br/>
        <Switch>
          <Route path="/heroes">
            <CarD />
          </Route>
          <br/>
          <Route path="/view_heroes">
            <View />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
        </header>
    </div>
    </Router>
  );
}

export default App;
