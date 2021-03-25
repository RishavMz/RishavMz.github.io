import React from "react";
import "./about.css";
import lines from "../../data/about.json";


export default function About(){
    return(<div className="About">
                <br/><center>
            <div className="face" onClick={()=>{
                console.log("Done")
                document.getElementById("aboutdata").classList.add("shower");
                document.getElementById("aboutdata").classList.remove("hider");
            }} onMouseEnter = {() => {
                document.getElementById("about1").classList.add("eyeshower");
                document.getElementById("about1").classList.remove("eyehider");
                document.getElementById("about2").classList.add("eyeshower");
                document.getElementById("about2").classList.remove("eyehider");
            }}onMouseLeave = {() => {
                document.getElementById("about1").classList.add("eyehider");
                document.getElementById("about1").classList.remove("eyeshower");
                document.getElementById("about2").classList.add("eyehider");
                document.getElementById("about2").classList.remove("eyeshower");
            }}
            ><span className="eye"><button id="about1" className="abtbtn eyehider"> About </button>   </span>
            <span className="eye"><button id="about2" className="abtbtn eyehider" > Me</button>  </span><div className="smile"></div></div></center>
        <center>
            <div id="aboutdata" className="hider">
            {lines.map((line)=>(<div className = "abttext" key={line.id}>
                {line.data}<br/><br/>
            </div>))}</div>
        <br/><br/>
        </center>
        </div>);
}