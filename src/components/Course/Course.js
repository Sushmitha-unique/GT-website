import React from "react";
import course from "../../Asserts/course.jpg"
import "./Course.css"
const Course = () =>{
    return (
        <div>
         <div className="program">
         <h1>Our <i><span style={{color:"#ebd913"}}>Career Programs</span></i> </h1>
         <p>Explore our offline courses designed by experts which offer students support, career counseling & Certification</p>
         </div>
         <div>
            <div className="courseBox">
               <div className="course">
               <img src={course} alt=""/>
               <h2>Web Development Training</h2>
               <p>Unlock the world of web development with our comprehensive course. 
                Learn the fundamentals of HTML, CSS, and JavaScript, and gain hands-on 
                experience with modern frameworks to build responsive and dynamic websites from scratch.</p>
                <button className="coursebutton">Know More</button>
               </div>
               <div className="course">
               <img src={course}  alt=""/>
               <h2>Java Full Stack Development</h2>
               <p>Dive into full stack development with our Java course. 
                Master front-end and back-end technologies, including Spring Boot,
                 Hibernate, and RESTful APIs,and RESTful APIs, to create robust, scalable web applications.</p>
                <button className="coursebutton">Know More</button>
               </div>
               <div className="course">
               <img src={course} alt="" />
               <h2>Python Full Stack Development </h2>
               <p>Explore the power of Python in our full stack course. 
                From front-end development with Django and Flask to back-end integration with databases
                 and APIs, you'll learn to build complete, data-driven web applications.</p>
                <button className="coursebutton">Know More</button>
               </div>

            </div>
         </div>
        </div>
    )
}
export default Course;