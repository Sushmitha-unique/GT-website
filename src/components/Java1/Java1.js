import React from "react";
import "./Java1.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Java1 = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="Heading1">JAVA FULL STACK</h1>
        <p className="Heading2">4.0 (2567 Students)</p>
        <div className="rating" data-rating="4.5">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="Details">
          <p>
            Want to land a job at your dream IT company? If yes, then Web 
            Development is the course for you.<br/> This course will help you learn
            the basics of web development and help you build a strong foundation
            in the field.
          </p>
          <p>
            First, Tap Gangaaram Technologie's ,Web development course makes
            learning fun with augmented reality training. <br/>Second, this course
            provides practical training on the concepts.
          </p>
          <p>
            In addition, it offers instructor-led training and personal
            mentorship from experts.<br/> Furthermore, the course covers the solution
            to the problems asked by top tech companies.
          </p>
          <p className="points">
            · Trusted by 10k+ students<br/>
            · Designed by subject matter experts <br/>
            · Consists of video lectures, quizzes, discussion forums, and coding problems<br/>
          </p>
          <p>
            The course profoundly covers the concept of Web Development
            , which are the building blocks of many real-life
            applications.
          </p>
          
          
          <div className="icons-section">
        <div className="icon-item ">
          <i className="fa fa-certificate"></i>
          <p>Certificate of Completion</p>
        </div>
        <div className="icon-item">
          <i className="fa fa-handshake"></i>
          <p>Placement Support</p>
        </div>
        <div className="icon-item">
          <i className="fa fa-calendar-alt"></i>
          <p>2024 Updated Courses</p>
        </div>
      </div>
        </div>
      </div>
      <div className="right-section">
        <div className="course-image">
          <img src="https://intellibiinnovationstechnologies.in/wp-content/uploads/2023/06/43.jpg" alt="Course Image" />
          <div className="buttons1">
            <button className="btn1">Enroll Now</button>
           
          </div>
        </div>
      </div>
      </div>

  );
};

export default Java1;
