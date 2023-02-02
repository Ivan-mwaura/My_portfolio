import React, { useState ,useEffect} from "react"


const Welcome = () => {

    const[shouldShowWelcome, setshouldShowWelcome] = useState(true);

   
   useEffect (() => {
    const appLoaded = localStorage.getItem("apploaded");

    if(appLoaded){
        setshouldShowWelcome(false)
    }
    else{
        localStorage.setItem('apploaded', true)
    }
   },[])

   if(shouldShowWelcome){
    return(
        <div className="welcome--hero">
            <div className="welcome--container">
                <h1>Welcome to my portfolio</h1>
            </div>
        </div>
    );
   }
   return null;
  
}
export default Welcome;