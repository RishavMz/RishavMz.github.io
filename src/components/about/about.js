import React from "react";
import "./about.css";
import lines from "../../data/about.json";

export default function About(){
    
    return(<div className="About">
            {lines.map((line)=>(<div key={line.id}>
                {line.data}<br/><br/>
            </div>))}
        </div>);
}