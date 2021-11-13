import React from 'react';
import './App.css';
import MusicOps from './components/MusicOps';
import MusicPlayingDisplay from './components/MusicPlayingDisplay';
import MusicTrackVolume from './components/MusicTrackVolume';

function App() {
  return (
    <div className="App">
      <main>
        testing
      </main>
      <header className="App-header">
        <MusicPlayingDisplay />
        <MusicTrackVolume />
        <MusicOps />
      </header>
    </div>
  );
}

export default App;
