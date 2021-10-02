import React from 'react';
import "./CustomerSupport.css";
import customer from "../../assests/customer.jpg";

const CustomerSupport = () => {
    return (
        <div className="customerSupport " style={{margin:"100px 0"}}>
            <div className="customer container">
                <div className="customerImg">
                    <img style={{width:'40vw'}} src={customer} alt="" />
                </div>
                <div className="customerContent">
                    <h1>We've been <br /> helping customer <br /> globally.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt quo, possimus optio quas necessitatibus cumque saepe ipsa quae! Nam?</p>
                    <br />
                    <button>More about us</button>
                </div>
            </div>
            <br /><br />
            <div className="advertise">
                <div className="addOne mx-5">
                    <h3>3.5k</h3>
                    <p>Job done successfully</p>
                </div>
                <div className="addTwo mx-5">
                    <h3>20million</h3>
                    <p>3.820 rating average</p>
                </div>
                <div className="addThree mx-5">
                    <h3>50k+</h3>
                    <p>Contract profile</p>
                </div>
                <div className="addFour mx-5">
                    <h3>3000+</h3>
                    <p>Using vCamp</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerSupport;