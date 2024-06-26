import React from "react";
import "./Choose.css"
import { IoIosAddCircle } from "react-icons/io";
const Choose = () =>{
    return (
        <div>
           <div className="choose">
            <div>
                <h1 className="chooseh1">Why to <i><span style={{color:"#ebd913"}}>Choose Us ?</span></i></h1>
                <p className="choosep">GANGAARAM TECHNOLOGIES vision is to upskill technical graduates into software employees. </p>
            </div>
            <div className="chooseflex">
               <div className="chooseflexbox">
               <h2><IoIosAddCircle />Unlimited Placement Opportunities</h2>
               <p>We Promise to provide you with a hanful of placement Opportunities 
                till you have offer letter in hands
               </p>
               </div>
               <div className="chooseflexbox">
               <h2><IoIosAddCircle />Dedicated Career support</h2>
               <p>Get Trained on SoftSkills,Mock Interviews,Resume Building,
                LinkedIn,Profile Optimization & much more
               </p>
               </div>
            </div>
           </div>
        </div>
    )
}
export default  Choose;