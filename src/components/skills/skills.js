import React from 'react';
import './skills.css';
import skills from "../../data/skills.json";

export default function Skills(){
    return(<div className="Skils"><hr/><br/>
        <center className="topichead">Technology I have worked with</center><br/><br/>
        <div className="mesh">
        <center className="topicheadsmall">Programming languages<br/><div class="nd">
        {skills.languages.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div class="flip-box-back"></div>
                </div>
            </div> 
        </div>))}
        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Frontend<br/><div class="nd">
        {skills.frontend.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div class="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Backend<br/><div class="nd">
        {skills.backend.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div class="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Database softwares<br/><div class="nd">
        {skills.database.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div class="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Tools<br/><div class="nd">
        {skills.tools.map((frame)=>(<div className="nodesk" key={frame.id}>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/>
                    </div>
                    <div class="flip-box-back"></div>
                </div>
            </div> 
        </div>))}        
        </div></center></div><br/>
    </div>);
}