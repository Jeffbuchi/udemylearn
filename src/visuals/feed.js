import React, { useState } from "react";
import logo from "../udemylogo/logo-coral.svg";
function Feed() { 

    const [nav, setNav] = useState([
        {label : "Home", slug : "/", icon : "ico ico-home"},
        {label : "Videos", slug : "video", icon : "ico ico-home"},
        {label : "Images", slug : "image", icon : "ico ico-home"}
    ])

    const [currentPage, setCurrentPage] = useState("/")

    var navigation = [];
    for (let i = 0; i < nav.length; i++){
        navigation.push(
            <li key = {"nav-" + i + "-" + nav[i].slug}>
            <a href = {nav[i].slug} className = {"link noul flex grey" + (currentPage == nav[i].slug? " on": "")} >
                <div className = {"ico s20 " + nav[i].icon}/>
                <h2 className = "lbl s20">{nav[i].label}</h2>
            </a>
        </li>
        )
    }

    
    return(
        <div className = "feed fixed">
             <a href = "#" className = "logo block">
                <img src = {logo} className ="block" />
            </a>

            <ul className = "nav">
                {navigation}
            </ul>

            <div className = "updated-course flex align">
            <div className = "icon-lamp-bright ico" />
            <div className = "lbl s13 fontb black">
                    Updated Courses
                    <h2 className = "author s13 grey">by Udemy</h2>
                </div>
            </div>
                <div className = "me flex align">
                    <div className = "photo grey s24"/>
                    <img src = "https://placeimg.com/100/100/tech" className = "block"/>
                    <div className = "lbl s13 fontb black">
                  Udemy
                   <h2 className = "handle s13 grey">@udemyofficial</h2>
                </div>
                    
                </div>
        </div>
    )
}

export default Feed;