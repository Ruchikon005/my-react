import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
const word = "Hello";
function App() {
  return (
    <div className='center'>
      <h1>GAME</h1>
      <WordCard value="hello" />
    </div>
  );

}

export default App;
