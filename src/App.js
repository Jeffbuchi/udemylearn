import React from "react";
import './css/App.css';
import './css/proj.css';

import Header from './visuals/header';
import Feed from './visuals/feed';
import HomePage from './visuals/home';
import ContentPage from './visuals/content';
import WelcomePage from './visuals/welcome';
import YoutubePage from './visuals/videopage';
import {Route,NavLink,HashRouter} from "react-router-dom";

function App () {
  return (
    
    <div className = "App flex">
      < WelcomePage/>
      <HashRouter>
      < Feed/>
      <div>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/content/:contentid" component = {ContentPage}/>
        <Route path = "/videopage" component = {YoutubePage}/>
        
        
      </div>
      
      
      </HashRouter>
    </div>
  )
}

export default App;