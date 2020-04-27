import React from "react";
import './css/App.css';
import './css/proj.css';

import Header from './visuals/header';
import Feed from './visuals/feed';
import HomePage from './visuals/home';
import ContentPage from './visuals/content';

function App () {
  return (
    <div className = "App flex">
      < Feed/>
      
      < ContentPage/>
      
      
    </div>
  )
}

export default App;