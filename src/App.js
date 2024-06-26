import React from "react";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import Choose from "./components/Choose/Choose";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
const App = () =>{
    return (
        <div>
            <Navbar/>
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