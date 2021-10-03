import React from 'react';
import './Footer.css';
import camp from '../../assests/camp.jpg';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <Fade bottom>
            <div className="footer">
            <div className="footerContent">
                <div className="footerUp">
                    <h1>Get update by <span style={{color:'red', borderBottom:"3px solid red"}}>signup</span> <br /> Newsletter</h1>
                    <div className="input">
                        <input type="text" placeholder="Enter your email address" />
                        <button className="btn btn-dark">Join Us</button>
                        <p style={{opacity:'0.6', textAlign:"right"}}>Already sign up? <b>unsubscribe</b></p>
                    </div>
                </div>
                <br /><br />
                <div className="footerDown">
                    <div className="col-one text-center">
                        <h5><span className="text-white bg-black p-2 rounded-circle">v</span> Camp</h5>
                        <br /><br />
                        <img src={camp} alt="" />
                    </div>
                    <div className="col-two">
                        <h5>Links</h5>
                        <p>Home</p>
                        <p>Pricing</p>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Features</p>
                        <p>Blogs</p>
                    </div>
                    <div className="col-three">
                        <h5>Legals</h5>
                        <p>Terms of use</p>
                        <p>Terms & conditions</p>
                        <p>Privacy & policy</p>
                        <p>Cookie policy</p>
                    </div>
                    <div className="col-four">
                        <h5>Products</h5>
                        <p>Take the tour</p>
                        <p>Live chat</p>
                        <p>Self-service</p>
                        <p>Social</p>
                        <p>Collaboration</p>
                        <p>vCamp Review</p>
                    </div>
                </div>
            </div>

            <div className="footerEnd container">
                <div className="terms">
                    <h6>Privacy & terms</h6>
                </div>
                <div className="copyright">Copyright @2021 vcamp inc.</div>
                <div className="socials">
                <i class="fab fa-facebook-f mx-2"></i> <i class="fab fa-twitter mx-2"></i> <i class="fab fa-linkedin-in mx-2"></i>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default Footer;