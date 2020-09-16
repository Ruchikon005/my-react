import React from 'react';
import './App.css';
import WordCard from './WordCard';
import logo from './Logo.png';
import logo1 from './logo.svg';

function App() {
    return (
      <div className = 'center'>
        
        <h1 className='Title'><p className = 'center'>REACT<img src={logo1} className="App-logo2" alt="logo1" />GAME</p></h1>
        <a href ='#'><WordCard value="hello" /></a>
        <h3>Click to arrange the words correctly.</h3>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

export default App;

