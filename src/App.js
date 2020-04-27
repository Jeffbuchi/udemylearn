import React from "react";
import './css/App.css';
import './css/proj.css';

import Header from './visuals/header';
import Feed from './visuals/feed';
import HomePage from './visuals/home';
import ContentPage from './visuals/content';
import {Route,NavLink,HashRouter} from "react-router-dom";

function App () {
  return (
    
    <div className = "App flex">
      <HashRouter>
      < Feed/>
      <div>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/content" component = {ContentPage}/>
        
        
      </div>
      
      
      </HashRouter>
    </div>
  )
}

export default App;