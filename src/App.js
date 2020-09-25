import React from 'react';
import logo from './macka.png';
import './App.css';
import MenuPage from './MenuPage.js'

const Intro = () => (
  <div className="container">
    <img src={logo} className="intro-macka-logo" alt="macka logo" />
  </div>
)

function App() {
  return (
    // <Intro/>
    <MenuPage/>
    
  );
}



export default App;
