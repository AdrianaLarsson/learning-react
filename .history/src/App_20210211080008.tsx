import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'
import Objects from './components/objects'
import Ctrl from './components/ctrl'
import Filter from './components/filter'
import Arrays from './components/arrays'
import Redu from './components/arrays'


function App() {



  return (
    <div className="App">
      <header className="App-header">
      {/*   <ForEach/>
        <Functions/>
        <Objects/>
        <Ctrl/>
        <Filter/> */}
        <Arrays/>
      </header>
    </div>
  );
}

export default App;
