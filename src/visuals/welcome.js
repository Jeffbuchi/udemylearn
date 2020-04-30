import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const WelcomePage = () => {
    function useLocalState(localItem){
        const [loc, setState] = useState(localStorage.getItem(localItem));

        function setLoc(newItem){
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }
        
        return[loc,setLoc]
    }

    useEffect(() => {
        document.title = "Welcome"
    })
    //const [login, setLogin] = useState(false);
    const [login, setLogin] = useLocalState(false);
    //const [name, setName] = useState("");
    const [name, setName] = useLocalState("name");
    const [email, setEmail] = useState("");
    //const [url, setUrl] = useState("");
    const [url, setUrl] = useLocalState("url");
    const responseGoogle = response => {
       setName(response.profileObj.name);
       setEmail(response.profileObj.email);
       setUrl(response.profileObj.imageUrl);
       setLogin(true);
    };
    
    console.log(login)
    return (
        <div className = "welcome">
            <h3 className = "text-logon">{ !login ? "Welcome! Login here.": name }</h3>
            <br/>
            <img className = "img-login" src = {url} alt = {name}/>
            { !login ? <GoogleLogin className = "logon"
    clientId="35041798621-lu7bdn5b402mhcgmq9g8o78h2crf6v85.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />: ""}

        

        </div>
    
);

}
    
    

export default WelcomePage;