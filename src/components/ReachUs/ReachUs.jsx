import React from 'react';
import "./ReachUs.css";
import Fade from 'react-reveal/Fade';


const ReachUs = () => {
    return (
        <Fade bottom>
            <div className="reachUs container">
            <div className="reachOne mb-2">
            <i class="fas fa-map-marker-alt"></i>
            <br /><br />
                <h5>Our address</h5>
                <p>Mirpur 2</p>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div className="reachTwo mb-2">
            <i class="fas fa-id-card-alt"></i>
            <br /><br />
                <h5>Contact Info</h5>
                <p>Call us at:</p>
                <span style={{color:'red'}}>310.841.5500</span>
            </div>
            <div className="reachThree mb-2">
            <i class="fas fa-ticket-alt"></i>
            <br /><br />
                <h5>Live Support</h5>
                <p>Live chat service</p>
                <a href="/" style={{ color:'black'}}>www.vcamplivesupport.com</a>
            </div>
        </div>
        </Fade>
    );
};

export default ReachUs;