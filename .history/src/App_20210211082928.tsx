import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'
import Objects from './components/objects'
import Ctrl from './components/ctrl'
import Filter from './components/filter'
import Arrays from './components/arrays'
import Reduce from './components/reduce'


function App() {

const sj = 'sj'

  return (
    <div className="App">
      <header className="App-header">
      {/*   <ForEach/>
     
        <Objects/>
        <Ctrl/>
        <Filter/> 
        <Arrays/>*/}
      {/*   //defaultProps */}
           <Functions/>
           <Functions title={}/>
      </header>
    </div>
  );
}

export default App;
