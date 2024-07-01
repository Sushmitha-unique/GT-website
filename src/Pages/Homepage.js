import React,{useEffect,useState} from "react";
import Home from "../components/Home/Home";
import Course from "../components/Course/Course";
import Choose from "../components/Choose/Choose";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
import Aihelpdesk from "../components/Aihelp/Aihelpdesk";
import Coursead from "../components/Coursead/Coursead";
const Homepage = () =>{
    const [showHelpDesk, setShowHelpDesk] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowHelpDesk(true);
      }, 3000); // Show the help desk after 5 seconds (adjust as needed)
  
      return () => clearTimeout(timer);
    }, []);
    return(
        <div>
            <Home/>
           <Course/>
           <Choose/>
           <Testimonials/>
           <Team/>
           <Coursead/>
           {showHelpDesk && <Aihelpdesk />}
        </div>
    )
}
export default Homepage;