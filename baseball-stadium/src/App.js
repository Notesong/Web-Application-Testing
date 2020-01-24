import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scoreboard</h1>
      </header>
      <section>
        <Display balls={balls} strikes={strikes} />
        <Dashboard setStrikes={setStrikes} setBalls={setBalls} />
      </section>
    </div>
  );
}

export default App;
