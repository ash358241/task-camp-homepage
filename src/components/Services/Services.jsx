import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div className="services container-fluid my-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 mb-4">
                    <p>WHAT WE DO</p>
                    <h1>Our included <br /> service.</h1>
                    <br />
                    <h5>We help client to create wordpress website with our talented expert</h5>
                    <br /><br />
                    <button>Discover More</button>
                </div>
                <div className="col-md-6">
                    <div className="service">
                        <div className="serviceOne">
                        <h6>Core WP</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        </div>
                        <div className="serviceTwo">
                        <h6>Core WP</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        </div>
                        <div className="serviceThree">
                        <h6>Core WP</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        </div>
                        <div className="serviceFour">
                        <h6>Core WP</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;