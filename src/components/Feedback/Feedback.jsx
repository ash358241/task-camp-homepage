import React from 'react';
import "./Feedback.css";

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="say container">
                <h1>What's our client say <br /> about us.</h1>
                <div className="icons">
                    icons
                </div>
            </div>
            <br />
            <div className="feedbackCards">
                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                    <h6>name</h6>
                    <h6>icons</h6>
                </div>
                </div>

                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                    <h6>name</h6>
                    <h6>icons</h6>
                </div>
                </div>

                <div className="feedbackCard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae expedita commodi accusamus aut vel a nostrum quam sunt atque?</p>
                <div className="feed">
                    <h6>name</h6>
                    <h6>icons</h6>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;