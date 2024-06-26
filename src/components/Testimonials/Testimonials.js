import React from "react";
import "./Testimonials.css";

const info = [
  {
    id: 1,
    name: "Sushmitha",
    job: "SDE 1 at Google",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  {
    id: 2,
    name: "Indhu",
    job: "Developer at Amazon",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  {
    id: 3,
    name: "Ravi",
    job: "Python developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  {
    id: 4,
    name: "Rani",
    job: "Java developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  {
    id: 5,
    name: "Ramya",
    job: "Backend developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  },
  {
    id: 6,
    name: "sathish",
    job: "Java developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor"
  }
  
];

const Testimonials = () => {
  return (
    <div>
      <div className="testimonial">
        <div>
          <h1 className="testimonialh1">Students <i><span style={{color:"#ebd913"}}>Testimonials</span></i></h1>
          <p className="testimonialp">Our offline training has made students learn to code, enhance their coding skills & got placed in various Companies.</p>
          <p className="testimonialp">Here are our few students placed at various companies:</p>
        </div>
        <div className="testimonialflex">
          {info.map((item) => (
            <div key={item.id} className="testimonialflexbox">
              <h3>{item.name}</h3>
              <p>{item.job}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
