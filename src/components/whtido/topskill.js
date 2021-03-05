import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topskill.css';

export default function WhatIDo(){
    return(<div className="whtido">
        <hr/><br/><center className="topichead">Top skills</center>
        <div className="row wido">
            <div className="col1 m-5">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/WebDevelopment.png`).default} alt="Web Development"/>
                        Web Developer
                        </div>
                        <div class="flip-box-back">
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col2 m-5">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img className="card-img-top sktopimg" src={require(`../../data/images/toolbox/python.png`).default} alt="Python programmer"/>
                        Python Programmer
                        </div>
                        <div class="flip-box-back">
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>);
}