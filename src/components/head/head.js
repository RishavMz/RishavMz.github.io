import React from 'react';
import DP from './dp.jpeg';
import './head.css';
import { useEffect, useState } from 'react';


export default function About(){
    const intro=[
    "Undergraduate",
    "IIIT Ranchi",
    "Web Developer",
    "Competitive Programmer",
    "Python Enthusiast"];
    const [idx, updateIdx] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
          updateIdx((prevIdx) => (prevIdx +1) % intro.length);
        }, 3000);
        return () => {
          window.clearInterval(timer);
        }
      }, [intro.length])

    return(<div className="head row" id="head">
            <div className="col">
            <img className = "dp" src = {DP} alt = 'Profile '/>
            </div>
            <div className="col  abt">
            RISHAV MAZUMDAR<br/><br/>
               <div className="intro">{intro[idx]}</div>
               <br/><br/>
               <a className="btn btnss1" href="rishavmz.github.io">View Resume</a>
            </div>

        <br/><br/><br/>
    </div>);
}

