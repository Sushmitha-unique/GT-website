import React, { useState, useEffect } from 'react';
import "./Coursead.css";
const Coursead = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseAd = () => {
    setShowAd(false);
  };

  return (
    <>
      {showAd && (
        <div className="course-ad-overlay">
          <div className="course-ad">
            <button className="close-btn" onClick={handleCloseAd}>
              &times;
            </button>
            <h3>Check out our latest course!</h3>
            <p>Going to be start from <span style={{color:"tomato"}}>July 1st</span></p>
            <div className="coursead">
               <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt=""/>
               <h2>Web Development Training</h2>
               <p>Unlock the world of web development with our comprehensive course. 
                Learn the fundamentals of HTML, CSS, and JavaScript, and gain hands-on 
                experience with modern frameworks to build responsive and dynamic websites from scratch.</p>
                <button className="courseadbutton">Enroll now</button>
               </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coursead;
