import React from 'react';
import angel from './denizboss.gif';
import Title from './components/Title'

import './App.css';

function App() {
  return (
         
    
    <div className="App">
      <main>
        <Title name='Deniz'/>
      </main>
      <header className="App-header">
        <img src={angel} alt='angel faced girl'></img>
        <p>Hello you sexy bitch!</p>
        
      </header>
    </div>
  );
}

export default App;
