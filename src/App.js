import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Homepage from "./Pages/Homepage";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Contact from "./components/Contact/Contact";
import Profilepage from "./Pages/Profilepage";
import Return from "./components/Return/Return";
import About from "./components/About/About";
import Roadmap from "./components/Roadmap/Roadmap";
import {Route,Routes} from "react-router-dom";
const App = () =>{
    return (
        <div>
            <Navbar/>
          <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profilepage/>} />
          <Route path="/return" element={<Return/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/roadmap" element={<Roadmap/>} />
          </Routes>
            <Footer/> 
        </div>
    )
}
export default App;