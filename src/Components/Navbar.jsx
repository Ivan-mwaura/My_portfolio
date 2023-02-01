import React, { useState } from "react";
import "../Pages/style.scss"
import { Link } from "react-router-dom";
import {Justify} from "react-bootstrap-icons"
import {X} from "react-bootstrap-icons"


const Navbar = () =>{
   
    
    const[isCollapsed, setIscollapsed] = useState(true)

    const handleMenuClick = () =>{
        setIscollapsed(!isCollapsed)
    }
  
    return(
    <div className="Navbar--container">
      <nav className="Navbar">  
        
         <div className="collapsible" >
            <div className="header" >
             <button
                onClick={()=>{
                    if(!isCollapsed){
                        setIscollapsed(true)
                    }
                    else{
                        setIscollapsed(false)
                    }
                }}
                >
                    {!isCollapsed ? <X
                    size={40}
                    color ="#64ffda"
                    />: <Justify
                    size={40}
                    color ="#64ffda"

                />}</button> 
              </div >
              <div >
                   { !isCollapsed && <div className="content">

                        <ol>
                            <li onClick={handleMenuClick}><Link to = "/about" className="link" ><span className="number">01. </span>About</Link></li>
                            <li onClick={handleMenuClick}><Link to ="/" className="link"><span className="number">02. </span>Profile</Link></li>
                            <li onClick={handleMenuClick}><Link to ="/contact" className="link"><span className="number">03. </span>Contact</Link></li>
                            <li onClick={handleMenuClick}><Link to = "/project" className="link"><span className="number">04. </span>Projects</Link></li>
                            <li onClick={handleMenuClick}><Link to = "/resume" className="link"><span className="number">05. </span>Resume</Link></li>
                        </ol>
                    </div>}
              </div>

            </div>
             
            <button><Link to = "/resume" className="link-button">Resume</Link></button>
            <button><Link to = "/project" className="link"><span className="number">04. </span>Projects</Link></button>
            <button><Link to ="/contact" className="link"><span className="number">03. </span>Contact</Link></button>
            <button><Link to ="/about" className="link"><span className="number">02. </span>About</Link></button>
            <button><Link to ="/" className="link"><span className="number">01. </span>Profile</Link></button>
            

            <div className="navbar--profile">
                    <img src={"/Img/huskie_5.jfif"} alt = {""}/>
                    <h1>Ivan Mwaura</h1>
             </div>
             
        </nav>
       
    </div>
    )
}
export default Navbar;