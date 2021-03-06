import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topskill.css';

export default function WhatIDo(){
    return(<div className="whtido" id="topskill">
        <hr/><br/><center className="topichead">Top skills</center>
        <div className="row wido">
            <div className="col1 m-5">
            <div className="col2 m-5">
                    <div className="inf">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/WebDevelopment.png`).default} alt="Web Development"/>
                    </div>
                    <br/><br/>
                    <b>Web Developer</b>
                </div> 
            </div>
            <div className="col2 m-5">
                    <div className="inf">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/python.png`).default} alt="Python programmer"/>
                    </div>
                    <br/><br/>
                    <b>Python Programmer</b>
            </div>
        </div>
    </div>);
}