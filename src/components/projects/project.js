import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import projects from "../../data/project.json";

export default function Project(){
    return(<div className="Project"><hr/><br/>
        <center className="topichead"> Projects</center><br/><br/>
        {projects.map((project)=>(<div className="card-deck" key={project[0].ID}>
            {project.map((proj)=>{
                return(<div className="card cardproj" key={proj.ID} onMouseEnter = {() => {
                    document.getElementById(proj.ID).classList.add('projanimin');
                    document.getElementById(proj.ID).classList.remove('projanimout');
                  }}  onMouseLeave = {() => {
                    document.getElementById(proj.ID).classList.add('projanimout');
                    document.getElementById(proj.ID).classList.remove('projanimin');
                  }}>
                <div className="imcont"><img className="card-img-top projimg" id={proj.ID} src={require(`../../data/images/projects/${proj.Image}`).default} alt={proj.Topic}/></div>
                <div className="card-body">
                <h5 className="card-title">{proj.Topic}</h5>
                <p className="card-text">{proj.About}</p>
                <blockquote><small className="text-muted">{proj.Btext}</small></blockquote>
                <p className="card-text"><a className="btn btnss prjbtn" href={proj.Link}>View Project</a></p>
                </div>
            </div>
                )})}      
        </div>
        ))}
    </div>);
}