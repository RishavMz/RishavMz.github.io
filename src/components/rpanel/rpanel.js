import React from 'react';
import './rpanel.css';
import Head from '../head/head';
import About from '../about/about';
import WhatIDo from '../whtido/topskill';
import Achievements from '../achievements/achievements';
import Projects from '../projects/project';
import Skills from '../skills/skills';
import Footer from '../footer/footer'

export default function Rpanel(){
    return(<div className="Rpanel">
        <Head/>
        <About/><br/><br/>
        <WhatIDo/>
        <Projects/><br/><br/>
        {/*<Achievements/><br/><br/>*/}
        <Skills/><br/><br/>
        <Footer/>
        
    </div>);
};
