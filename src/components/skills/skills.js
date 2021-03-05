import React from 'react';
import './skills.css';
import skills from "../../data/skills.json";

export default function Skills(){
    return(<div className="Skils"><hr/><br/>
        <center className="topichead">Technology I have worked with</center><br/><br/>
        <div className="mesh">
        <center className="topicheadsmall">Programming languages<br/><div class="nd">
        {skills.languages.map((frame)=>(<div className="nodesk" key={frame.id}><img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/></div>))}
        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Frameworks<br/><div class="nd">
            {skills.frameworks.map((frame)=>(<div className="nodesk" key={frame.id}><img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/></div>))}
        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Database softwares<br/><div class="nd">
        {skills.database.map((frame)=>(<div className="nodesk" key={frame.id}><img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/></div>))}
        </div></center></div><br/>
        <div className="mesh">
        <center className="topicheadsmall">Tools<br/><div class="nd">
        {skills.tools.map((frame)=>(<div className="nodesk" key={frame.id}><img className="card-img-top skimg" id={frame.id} src={require(`../../data/images/toolbox/${frame.image}`).default} alt={frame.name}/></div>))}
        </div></center></div><br/>
    </div>);
}