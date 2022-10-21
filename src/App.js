import React from 'react';
import './App.css';
import Places from './components/Places';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="h1">Favorite Places</h1>
      <Places/>

    </div>
  );
}

export default App;
