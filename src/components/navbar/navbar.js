import React from 'react';
import './navbar.css';

export default function Navbar(){
    return(<div className="navbar">
        <ul>
        <br/><br/><br/><br/>
            <br/><div className="nlink" onClick={()=>{
                var about = document.getElementById("head");
                about.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Rishav</div>
            <br/><div className="nlink" onClick={()=>{
               var topskill = document.getElementById("topskill");
               topskill.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Top skills</div>
            <br/><div className="nlink" onClick={()=>{
                var project = document.getElementById("project");
                project.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Projects</div>
            {/*<br/><div className="nlink" onClick={()=>{
                var achievements = document.getElementById("achievements");
                achievements.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Achievements</div>*/}
            <br/><div className="nlink" onClick={()=>{
                var techstack = document.getElementById("techstack");
                techstack.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }}>Tech stack</div>
            <br/>
        </ul>
    </div>);
};
