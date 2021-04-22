import React from 'react';
import './skills.css';
import skills from "../../data/skills.json";

export default function Skills(){
    return(<div className="Skils" id="techstack"><hr/><br/>
        <center className="topichead">Technology I have worked with</center><br/><br/>
        <div className="mesh">
        <center className="topicheadsmall">Programming languages<br/><div className="nd">
        {skills.languages.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div className="flip-box-back"></div>
                </div>
            </div> 
        </div>))}
        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Frontend tools <br/><div className="nd">
        {skills.frontend.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div className="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Backend tools <br/><div className="nd">
        {skills.backend.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div className="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Database softwares<br/><div className="nd">
        {skills.database.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div className="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Dev Tools <br/><div className="nd">
        {skills.tools.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div className="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        
        </div></center></div><br/>
    </div>);
}