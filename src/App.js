import React from "react";
import './css/App.css';
import './css/proj.css';

import Header from './visuals/header';
import Feed from './visuals/feed';

function App () {
  return (
    <div className = "App flex">
      < Header/>
      < Feed/>
    </div>
  )
}

export default App;