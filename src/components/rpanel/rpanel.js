import React from 'react';
import './rpanel.css';
import Head from '../head/head';
import About from '../about/about';
import Projects from '../projects/project';
import Skills from '../skills/skills';
import Footer from '../footer/footer'

export default function Rpanel(){
    return(<div className="Rpanel">
        <Head/>
        <About/><br/><br/>
        <Projects/><br/><br/>
        <Skills/><br/><br/>
        <Footer/>
        
        
    </div>);
};
