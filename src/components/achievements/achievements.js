import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import achievements from '../../data/achievements.json';
import './achievements.css';

export default function Achievements(){
    return(<div className="achievements" id="achievements"><hr/><br/><br/>
     <div className="topichead"><center>Achievements</center></div><br/><br/>
        <center>
        {achievements.map((ach)=>(<div className="achieved" key={ach.id}>
        <a href={ach.refs}>{ach.data}</a><br/><br/>
        </div>))}</center>
    </div>);
}