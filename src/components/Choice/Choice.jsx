import React from "react";
import "./Choice.css";
import img from "../../assests/banner.jpg";

const Choice = () => {
  return (
    <div className="choice">
      <div className="row w-100 choiceContainer">
        <div className="col-md-6">
          <img style={{ width: "40vw" }} src={img} alt="" />
        </div>
        <div className="col-md-6">
          <h1>
            Why you <br /> should choose <br /> vChamp?
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quisquam!
          </p>
          <br />
          <button>Learn More</button>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="offers">
          <div className="cardOne">
              <h5>Friendly interface</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
          <div className="cardTwo">
              <h5>Quality Support</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
          <div className="cardThree">
              <h5>Great Pricing</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, cumque.</p>
          </div>
      </div>
    </div>
  );
};

export default Choice;
