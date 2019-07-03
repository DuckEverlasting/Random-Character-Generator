import React from 'react';
import './App.css';
import {useSelector} from 'react-redux'

import CreatureForm from './components/CreatureForm';
import Battlefield from "./components/Battlefield"
import Footer from './components/Footer';
import MV from './components/MonsterViewer'


function App() {
    const selection=useSelector(state=>state.selected)
    return (
    <div className="App">

      {selection && <MV/>}
      {!selection && <CreatureForm />}
      <Battlefield />
      <Footer />

    </div>
  );
}

export default App;
