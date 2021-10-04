import React from 'react';
import "./Feedback.css";
import Fade from 'react-reveal/Fade';


const Feedback = () => {
    return (
        <Fade bottom>
            <div className="feedback">
            <div className="say container">
                <h1>What's our <span style={{color:'red', borderBottom:"3px solid red"}}>client</span> say <br /> about us.</h1>
                <div className="icons">
                <i class="fas fa-long-arrow-alt-left"></i> <i class="fas fa-long-arrow-alt-right bg-white p-3 rounded-circle ms-3"></i>
                </div>
            </div>
            <br />
            <div className="feedbackCards">
                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                    <h6>- Martin Jonas <span style={{opacity:'0.4'}}>USA</span></h6>
                    <i class="fas fa-quote-left ms-3 text-white bg-dark p-2 rounded-circle"></i>
                </div>
                </div>

                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                <h6>- Martin Jonas <span style={{opacity:'0.4'}}>USA</span></h6>
                <i class="fas fa-quote-left ms-3 text-white bg-dark p-2 rounded-circle"></i>
                </div>
                </div>

                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                <h6>- Martin Jonas <span style={{opacity:'0.4'}}>USA</span></h6>
                <i class="fas fa-quote-left ms-3 text-white bg-dark p-2 rounded-circle"></i>
                </div>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default Feedback;