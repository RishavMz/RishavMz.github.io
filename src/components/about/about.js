import React from "react";
import "./about.css";
import lines from "../../data/about.json";
import edu from "../../data/education.json";


export default function About(){
    return(<div className="About">
                <center className="topichead"> About</center><br/><br/><center>
            <div className="face"><span className="eye"><button id="about1" className="abtbtn" onClick= {() => {
                document.getElementById("aboutdata").classList.add("shower");
                document.getElementById("aboutdata").classList.remove("hider");
                document.getElementById("educdata").classList.add("hider");
                document.getElementById("educdata").classList.remove("shower");
            }}> About me</button>   </span>
            <span className="eye"><button id="about2" className="abtbtn" onClick={()=>{
                document.getElementById("educdata").classList.add("shower");
                document.getElementById("educdata").classList.remove("hider");
                document.getElementById("aboutdata").classList.add("hider");
                document.getElementById("aboutdata").classList.remove("shower");
            }}> Education</button>  </span><div className="smile"></div></div></center>
        <center>
            <div id="aboutdata" className="hider">
            {lines.map((line)=>(<div className = "abttext" key={line.id}>
                {line.data}<br/><br/>
            </div>))}</div>
        
        <br/><br/>
        <div id="educdata" className="hider">
            {edu.map((ed)=>(<div key={ed.id}><div className = "edudata">
                <div className="school">{ed.name}</div><div className="degree">{ed.degree}</div><div className="marks">{ed.marks}</div>
            </div>
            </div>))}</div>
        </center>
        </div>);
}