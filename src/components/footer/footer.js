import React from 'react';
import './footer.css';

export default function Footer(){

    return(<div className = "footer" ><center>
        <br/><div id = "contact">Contact Me:</div><br/>
        <form >
            <input type="text" name="name"   className="message" placeholder="Name"></input>
            <input type="email" name="email" className="message" placeholder="E-mail ID"></input><br/>   
            <textarea className="messagebox" name="message" rows="5" cols="50" placeholder="message"></textarea><br/>
            {/*<button className="btn btnss1">Send</button>*/}
        </form>
        <br/><br/>
        <span className = "m-3"><a href="https://github.com/RishavMz"><i className="fa-2 fa-github fa icon" aria-hidden="true"></i><span className = "sr">github</span></a></span>
        <span className = "m-3"><a href="https://in.linkedin.com/in/rishav-mazumdar-38b869192"><i className="fa-2 fa-linkedin fa icon" aria-hidden="true"></i><span className = "sr">linkedin</span></a></span>
        <span className = "m-3"><a href="mailto:rishav.mazumdar123@gmail.com"><i className="fa-2 fa-envelope fa icon" aria-hidden="true"></i><span className = "sr">email</span></a></span>
        <blockquote>
            <br/><br/>
            <span className = " m-4">Made by Rishav Mazumdar</span>
        </blockquote><br/><br/></center>
    </div>);
}

