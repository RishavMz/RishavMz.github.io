import React from 'react';
import DP from './dp.jpeg';
import './head.css';

export default function About(){
    const Lines = [{
    'id':1,'data':'RISHAV MAZUMDAR'},{
    'id':2,'data':'Full Stack Web Developer | Python enthusiast | Undergraduate'}
    ];
    return(<div className="head">
            <img className = "dp" src = {DP} alt = 'Profile '/>
            <div className = " abt">
               {Lines.map((line) =>(
                   <div key ={line.id} className="abtext">
                       {line.data}<br/><br/>
                   </div>))}
            </div>
        <br/><br/><br/>
    </div>);
}

