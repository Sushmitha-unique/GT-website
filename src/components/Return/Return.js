import React,{useEffect,useState} from 'react'
import "./Return.css";
import Aihelpdesk from '../Aihelp/Aihelpdesk';
const Return = () => {
    const [showHelpDesk, setShowHelpDesk] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowHelpDesk(true);
      }, 2000); // Show the help desk after 5 seconds (adjust as needed)
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div >
      <div className='returnpolicy'>
      <div className="return-logo">
        <img src="https://media.licdn.com/dms/image/C4D16AQFHXSba8Nf89g/profile-displaybackgroundimage-shrink_200_800/0/1655103837481?e=2147483647&v=beta&t=6Jo4c8zN93e6xPmmkdIA6o8spzNTBoRCWjOWYe_tqi8" alt="Logo" />
      </div>
      <div className='returndiv'> 
        <h3>Refund and Cancellation Policy</h3>
        <p style={{textAlign:"justify"}}>At GANGAARAM TECHNOLOGIES , we value the trust of our students immensely. If you feel that a course does not meet your expectations,
             we offer a 7-day money-back guarantee. Just send us a refund request via email within 7 days of purchase and we will
              refund 100% of your payment, no questions asked!</p>
         <h5>To claim a refund, kindly follow the below procedure:</h5>     
         <ol>
            <li>Drop an email on info@thegangaaramtech.com with a subject “Online course refund | Course name”.</li>
            <li>Kindly mention the reason for the refund request in the email.</li>
            <li>Our team will review your request and get back to you within 24 hours.</li>
         </ol>
      </div>
      </div>
      {showHelpDesk && <Aihelpdesk />}
    </div>
  )
}

export default Return;
