import React from 'react';
import DP from './dp.jpeg';
import './head.css';
import { useEffect, useState } from 'react';


export default function About(){
    const intro=[
    "Undergraduate","",
    "IIIT Ranchi","",
    "Web Developer","",
    "Competitive Programmer","",
    "Python Enthusiast",""];
    const [idx, updateIdx] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
          updateIdx((prevIdx) => (prevIdx +1) % intro.length);
        }, 1500);
        return () => {
          window.clearInterval(timer);
        }
      }, [intro.length])

    return(<div className="head" id="head">
            <img className = "dp" src = {DP} alt = 'Profile '/>
            <div className=" abt">
            <span className="nme">RISHAV MAZUMDAR</span><br/><br/>
               <div className="intro">{intro[idx]}</div>
               <br/><br/>
               <a className="btn btnss1" href="https://drive.google.com/file/d/1Fdhjlq8PwuiVTJXJ6tU8bZXlnmVH-_q-/view?usp=sharing">View Resume</a>
            </div>
        <br/><br/><br/>
    </div>);
}

