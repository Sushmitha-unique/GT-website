import React from "react";
import hero from "../../Asserts/hero.mp4"
import "./Home.css"

const Home = () =>{
    return(
        <div>
          <div className="hero">
            <div className="hero-left">
             <h2>Gamify learning Simplify Employment</h2>
             <div>
               
                <p>GANGAARAM TECHNOLOGIES is an One-Stop Destination
                     to upskill your coding skills or reskill yourself. 
                     More than 35,000+ students trust us all over India.</p>
             </div>
             <div className="hero-latest-btn">
                <div>Attend Free Demo class</div>
             </div>
            </div>
            <div className="hero-right">
            <video src={hero} muted autoPlay loop type="vido/mp4" ></video>
            </div>
          </div>
        </div>
    )
}

export default Home;