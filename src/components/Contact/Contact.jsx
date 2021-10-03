import React from 'react';
import "./Contact.css";
import Fade from 'react-reveal/Fade';


const Contact = () => {
    return (
        <Fade bottom>
            <div className="contact">
            <div className="contactForm">
                <form action="">
                    <p>Name* </p>
                    <input type="text" placeholder="Your name" />
                    <br /><br />
                    <p>Email* </p>
                    <input type="text" placeholder="Your email" />
                    <br /><br />
                    <textarea name="" id="" placeholder="Your message"></textarea>
                    <br /><br />
                    <input style={{backgroundColor:"black", color:'white', padding:'10px 0'}} type="button" value="Send Message" />
                </form>
            </div>
            <div className="contactText">
                <h1>Let's talk <br /> about your big <br /> <span style={{color:'red', borderBottom:"3px solid red"}}>project</span></h1>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugiat!</p>

                <span style={{opacity:'0.4'}}>For urgent help call us at:</span>
                <p>+227 300-3676</p>
            </div>
        </div>
        </Fade>
    );
};

export default Contact;