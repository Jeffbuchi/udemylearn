import React from "react";
import './css/App.css';
import './css/proj.css';

import Header from './visuals/header';
import Feed from './visuals/feed';
import HomePage from './visuals/home';

function App () {
  return (
    <div className = "App flex">
      < Feed/>
      <div className = "app-content">
      < HomePage/>
      </div>
      
    </div>
  )
}

export default App;