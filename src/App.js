import React from 'react';
import logo from './macka.png';
import './App.css';
import MenuPage from './MenuPage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Intro = () => (
  <div className="intro-container">
    <img src={logo} className="intro-macka-logo" alt="macka logo" />
  </div>
)

function App() {
  return (
    // <div>
    //   <Intro/>
    //   <MenuPage/>
    // </div>
    <Router>
      <Switch>
          <Route exact path="/">
            <Intro/>
            <MenuPage/>
          </Route>
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route path="/letterwork">
            <p>letterwork</p>
          </Route>
          <Route path="/makingimages">
            <p>making images</p>
          </Route>
          <Route path="/reflectivepractice">
            <p>reflectivepractice</p>
          </Route>
          <Route path="/elementsofdesign">
            <p>elementsofdesign</p>
          </Route>
          <Route path="/makemytype">
            <p>makemytype</p>
          </Route>
          <Route path="/chanceandchoice">
            <p>chanceandchoice</p>
          </Route>
      </Switch>
  </Router>

    
  );
}



export default App;
