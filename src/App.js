import React from "react";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import Choose from "./components/Choose/Choose";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer"
const App = () =>{
    return (
        <div>
           <Home/>
           <Course/>
           <Choose/>
           <Testimonials/>
           <Team/>
            <Footer/> 
        </div>
    )
}
export default App;