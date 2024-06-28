import React from 'react'
import Profile from "../components/Profile/Profile";
import Profilecourse from "../components/Profilecourse/Profilecourse";
const Profilepage = () => {
  return (
    <div className='profilepage' >
            <Profile className="profilepageflex1"/>
            <Profilecourse className="profilepageflex2"/>
    </div>
  )
}

export default Profilepage
