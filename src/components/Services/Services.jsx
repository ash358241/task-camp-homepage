import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div className="services my-5">
            <div className="row d-flex align-items-center container ">
                <div className="col-md-6 mb-4">
                    <p>WHAT WE DO</p>
                    <h1>Our <span style={{color:'red', borderBottom:"3px solid red"}}>included</span> <br />service.</h1>
                    <br />
                    <h5>We help client to create wordpress website with our talented expert</h5>
                    <br /><br />
                    <button className="btn btn-dark">Discover More <i class="fas fa-chevron-right"></i></button>
                </div>
                <div className="col-md-6">
                    <div className="service">
                        <div className="serviceOne">
                        <i class="far fa-star bg-white"></i>
                        <br /><br />
                        <h6>Core WP</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className="serviceTwo">
                        <i class="fas fa-plug bg-white"></i>
                        <br /><br />
                        <h6>Plugin Development</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className="serviceThree">
                        <i class="fab fa-instalod bg-white"></i>
                        <br /><br />
                        <h6>Installation</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className="serviceFour">
                        <i class="fab fa-intercom bg-white"></i>
                        <br /><br />
                        <h6>Customization</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, neque?</p>
                        <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;