import React from 'react';
import "./CustomerSupport.css";
import customer from "../../assests/customer.jpg";
import Fade from 'react-reveal/Fade';

const CustomerSupport = () => {
    return (
       <Fade bottom>
            <div className="customerSupport " style={{margin:"100px 0"}}>
            <div className="customer container">
                <div className="customerImg">
                    <img  src={customer} alt="" />
                    <div className="comment shadow bg-white rounded">
                        <p>Our partnership with vCamp. Their support help us to solve everything</p>
                        <div className="commenter">
                            <h6>Rashed Ka, <span style={{opacity:'0.4'}}>CEO vCamp</span> <i class="fas fa-quote-left ms-3 text-danger"></i></h6>
                        </div>
                    </div>
                </div>
                <div className="customerContent">
                    <h1>We've been <br /> helping <span style={{color:'red', borderBottom:"3px solid red"}}>customer</span> <br /> globally.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt quo, possimus optio quas necessitatibus cumque saepe ipsa quae! Nam</p>
                    <br />
                    <button style={{background:'transparent', padding:'10px 30px'}}>More about us</button>
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
       </Fade>
    );
};

export default CustomerSupport;