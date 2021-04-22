import React from 'react';
import './navbar.css';

//const opentowork = true;

export default function Navbar(){
    return(<div className="navbar">
        <ul>
        <br/><br/><br/><br/>
            <br/><div className="nlink" onClick={()=>{
                var about = document.getElementById("head");
                about.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>About Me</div>
            <br/><div className="nlink" onClick={()=>{
                var project = document.getElementById("project");
                project.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Projects</div>

            <br/><div className="nlink" onClick={()=>{
                var techstack = document.getElementById("techstack");
                techstack.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Tech stack</div>
            <br/>
            <br/><br/><br/><br/>
            {/*(opentowork)?<div className="work">OPEN TO WORK</div>:<div></div>*/}
            
        </ul>

            
    </div>);
};
