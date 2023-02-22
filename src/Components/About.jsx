import React from "react";
import "../Pages/style.scss"

const About= () =>{
    return(
        <div className="about--container">
            <div className = "about--content">
                <div>
                    <h1>About me</h1>
                    <p>
                        Hello My name is <span >Evans Mwaura </span>and I enjoy creating  things that live on the 
                        internet<br/> My interest in web development started back in 2021 when I started to <br/>
                        try editing custom Tumbelr themes - turns out hacking together a custom reblog <br/>
                        taught me a lot about HTML & CSS!
                        <br/>
                        <br/>
                        Fast-forward to today, I have continued bulding my expertize and upgrading my <br/>
                        by doing multiple projects which have enabled me to master my skill. My main <br/>
                        focus today is building inclusive products and digital experinces for a variety <br/>
                        of clients.

                        Here are a few technologies I`ve been working on recently
                        <div className="technologies">
                            <ol>
                                <li>Javascript(Es6+)</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                            </ol>
                            <ol>
                               <li>scss</li>
                               <li>Css</li>
                               <li>Django</li>
                            </ol>
                        </div>     
                    </p>   
                </div>

                <div className="profile--image">
                    <img src={"Img/profile.jpeg"} className ={"profile--picture"}alt = {""}/>
                </div>
            </div>
        </div>
    )
}
export default About;