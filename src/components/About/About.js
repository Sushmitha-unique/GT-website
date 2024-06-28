import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
      <div className='aboutheader'>
      <h1>About Us</h1>
      <h4>Gamify learning Simplify Employment</h4>
      </div>
      <div className='aboutsection'>
            <img src="https://media.licdn.com/dms/image/C4D16AQFHXSba8Nf89g/profile-displaybackgroundimage-shrink_200_800/0/1655103837481?e=2147483647&v=beta&t=6Jo4c8zN93e6xPmmkdIA6o8spzNTBoRCWjOWYe_tqi8" alt="Logo" />
            
            <div class="aboutcontent">
                <p>Gangaaram Tech was instituted prirmarily to enable new college recruits with basic skillsets and all rounded professionalism sought after by the VLSI and Embedded Systems industry.
                Gangaaram Tech professional development is started by VLSI industry veterans with decades of entrepreneurial background, who feel the pain of slow engineering hire process.
                 The growth prospects are far outpacing the talent pool supply.Gangaaram Tech is established to bridge this gap for the industry and help students to secure dream job right out of college.
                </p>
                {/* <button className='aboutbutton'>Read More...</button> */}
            </div>
      </div>
      <div className='aboutflexbox'>
      <div className='aboutflex'>
      <h2>Mission</h2><br/>
        <p>our mission is to democratize education by providing free, high-quality courses in web development, Java full stack, and Python full stack. We are dedicated to empowering students from all backgrounds to gain the skills needed to succeed in the tech industry. By fostering an inclusive and supportive learning environment, we aim to bridge the gap between education and employment, ensuring that everyone has the opportunity to achieve their professional goals."</p>
      </div>
      <div className='aboutflex'>
      <h2>vision</h2><br/>
        <p>our mission is to democratize education by providing free, high-quality courses in web development, Java full stack, and Python full stack. We are dedicated to empowering students from all backgrounds to gain the skills needed to succeed in the tech industry. By fostering an inclusive and supportive learning environment, we aim to bridge the gap between education and employment, ensuring that everyone has the opportunity to achieve their professional goals."</p>
      </div>
      <div className='aboutflex'>
      <h2>Achievements</h2><br/>
        <p>our mission is to democratize education by providing free, high-quality courses in web development, Java full stack, and Python full stack. We are dedicated to empowering students from all backgrounds to gain the skills needed to succeed in the tech industry. By fostering an inclusive and supportive learning environment, we aim to bridge the gap between education and employment, ensuring that everyone has the opportunity to achieve their professional goals."</p>
      </div>
      </div>
    </div>
  )
}

export default About;
