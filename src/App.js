import React from 'react';
import './App.css';
import WordCard from './WordCard';


function App() {
    return (
      <div className='center' >
        <h1 className='backTitle'>GAME</h1>
        <a href ='#'><WordCard value="hello" /></a>
      </div>
    );
  }

export default App;

