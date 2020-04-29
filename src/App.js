import React from "react";
import './css/App.css';
import './css/proj.css';

import DataBaseList from './visuals/dblist';
import Feed from './visuals/feed';
import HomePage from './visuals/home';
import ContentPage from './visuals/content';
import Images from './visuals/imgur';
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
        <Route path = "/imgur" component = {Images}/>
        <Route path = "/videopage" component = {YoutubePage}/>
        <Route path = "/dblist" component = {DataBaseList}/>
        
        
      </div>
      
      
      </HashRouter>
    </div>
  )
}

export default App;