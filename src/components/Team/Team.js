import React from "react";
import "./Team.css";
import image1 from "../../Asserts/21121A1215.JPG";
import image2 from "../../Asserts/21121A05H3.JPG";

const Team = () => {
  return (
    <div>
      <div className="team">
        <h1 className="teamh1">Our <i><span style={{color:"#ebd913"}}>Team</span></i></h1>
      </div>
      <div className="teamflex">
        <div className="teamflexbox">
          <div className="team-image-container">
            <img src={image1} alt="" className="team-image" />
            <div className="team-overlay">
              <h3>Sushmitha</h3>
              <p>MERN Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="teamflexbox">
          <div className="team-image-container">
            <img src={image2} alt="" className="team-image" />
            <div className="team-overlay">
              <h3>Indhu</h3>
              <p>Web developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
