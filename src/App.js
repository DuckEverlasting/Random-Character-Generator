import React from 'react';
import './App.css';

import CreatureForm from './components/CreatureForm';
import Battlefield from "./components/Battlefield"
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <CreatureForm />
      <Battlefield />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
