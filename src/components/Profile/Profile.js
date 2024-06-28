import React from "react";
import "./Profile.css";
const Profile = () =>{
    function handlelogout(){
        localStorage.removeItem("auth-token");
        window.location.href="/";
    }
return(
    <div>
       <div className="profilediv">
        <div>
        <h1>Profile</h1>
        <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Profile" />
        </div>
        <div className="userdiv">
            <h3 style={{fontSize:"18px"}}>Sushmitha</h3>
            <h3 style={{fontSize:"18px"}}>userid</h3>
            <h3 style={{fontSize:"18px"}}>Sushmitha@gmail.com</h3>
            <button className="profilebutton" onClick={handlelogout}>Logout</button>
        </div>
       </div>
    </div>
)
} 
export default Profile;