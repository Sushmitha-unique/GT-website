import React from "react";
import Home from "../components/Home/Home";
import Course from "../components/Course/Course";
import Choose from "../components/Choose/Choose";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
const Homepage = () =>{
    return(
        <div>
            <Home/>
           <Course/>
           <Choose/>
           <Testimonials/>
           <Team/>
        </div>
    )
}
export default Homepage;