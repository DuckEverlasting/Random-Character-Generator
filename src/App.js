import React from 'react';
import './App.css';

import CreatureForm from './components/CreatureForm';
import Battlefield from "./components/Battlefield"


function App() {
  return (
    <div className="App">

      <CreatureForm />
      <Battlefield />

    </div>
  );
}

export default App;
