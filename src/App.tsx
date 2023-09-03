import React from 'react';

import './App.css';
import LandingPage from './component/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        {/* <EventTrail itemId='64ef2cbf481cc4e24cb23117' /> */}
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
