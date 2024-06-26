import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Homepage from "./Pages/Homepage";
import {Route,Routes} from "react-router-dom";
const App = () =>{
    return (
        <div>
            <Navbar/>
          <Routes>
          <Route index element={<Homepage />} />
          </Routes>
            <Footer/> 
        </div>
    )
}
export default App;