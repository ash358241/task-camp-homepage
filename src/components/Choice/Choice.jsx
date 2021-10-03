import React from "react";
import "./Choice.css";
import img from "../../assests/banner.jpg";
import Fade from 'react-reveal/Fade';


const Choice = () => {
  return (
   <Fade bottom>
      <div className="choice">
      <div className="row w-100 mx-auto hoiceContainer">
        <div className="col-md-6 choiceImg">
          <img  src={img} alt="" />
        </div>
        <div className="col-md-6">
          <h1>
            Why you <br /> should <span style={{color:'red', borderBottom:"3px solid red"}}>choose</span> <br /> vChamp?
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quos.
          </p>
          <br />
          <button style={{background:'transparent', padding:'10px 20px'}}>Learn More</button>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="offers">
          <div className="cardOne">
          <i class="far fa-star"></i>
          <br /><br />
              <h5>Friendly interface</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
          <div className="cardTwo">
          <i class="fas fa-phone-volume"></i>
          <br /><br />
              <h5>Quality Support</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
          <div className="cardThree">
          <i class="fas fa-tags"></i>
          <br /><br />
              <h5>Great Pricing</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
      </div>
    </div>
   </Fade>
  );
};

export default Choice;
