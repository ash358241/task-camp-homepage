import React from 'react';
import "./Banner.css";
import banner from "../../assests/banner.jpg"

const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerMain">
                <div className="bannerMainText">
                    <h1>
                        We'r the <br /> Wordpress <br /> Guru
                    </h1>
                    <p>We help client to create wordpress website with our talented expert.</p>
                    <div className="bannerInput">
                        <input type="email" name="" id="" />
                        <button>Try free demo</button>
                        <p>Already a member? <span style={{fontWeight:'bold', marginRight: '5px', marginLeft: '5px'}}>Sign in.</span></p>
                    </div>
                </div>
                <div className="bannerMainImage">
                        <img style={{width:'40vw'}} src={banner} alt="" />
                </div>
            </div>

            <p style={{display:"flex", alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>Over<span style={{fontWeight:'bold', marginRight: '5px', marginLeft: '5px'}}>32k+</span>software business growing with vCamp.</p>

            <div className="bannerCompany">
                <h4>Lotice</h4>
                <h4>Fundbox</h4>
                <h4>getaround</h4>
                <h4>doximity</h4>
                <h4>Segment</h4>
            </div>
        </div>
    );
};

export default Banner;