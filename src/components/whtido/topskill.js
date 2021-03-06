import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topskill.css';

export default function WhatIDo(){
    return(<div className="whtido" id="topskill">
        <hr/><br/><center className="topichead">Top skills</center>
        <div className="row wido">
            <div className="col1 m-5">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/WebDevelopment.png`).default} alt="Web Development"/>
                        </div>
                        <div class="flip-box-back">
                        </div>
                    </div>
                    <br/><br/>
                    Web Developer
                </div> 
            </div>
            <div className="col2 m-5">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/python.png`).default} alt="Python programmer"/>
                        </div>
                        <div class="flip-box-back">
                        </div>
                    </div>
                    <br/><br/>
                    Python Programmer
                </div> 
            </div>
        </div>
    </div>);
}