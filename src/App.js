import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Homepage from "./Pages/Homepage";
import {Route,Routes} from "react-router-dom";
import Webpage from "./Pages/Webpage";
import Pythonpage from "./Pages/Pythonpage";
import Javapage from "./Pages/Javapage";

const App = () =>{
    return (
        <div>
            <Navbar/>
          <Routes>
          <Route index element={<Homepage />} />
          <Route path="/webpage"  element={<Webpage/>} />
          <Route path="/pythonpage"  element={<Pythonpage/>} />
          <Route path="/javapage" element={<Javapage/>} />
          
          </Routes>
            <Footer/> 
        </div>
    )
}
export default App;