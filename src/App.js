import React from 'react';
import './App.css';
import Lpanel from './components/lpanel/lpanel';
import Rpanel from './components/rpanel/rpanel';

function App(){

  return (<div className = "App">
    {<>
    <Lpanel></Lpanel>
    <Rpanel></Rpanel>
    </>
    }

  </div>);
}

export default App;