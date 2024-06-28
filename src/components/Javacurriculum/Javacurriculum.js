import React from 'react';
import './Javacurriculum.css';
const info = [
  {
    id:1,
    modulename:"Introduction to Web Development"
  },
  {
    id:2,
    modulename:"Front-End Development Frameworks"
  },{
    id:3,
    modulename:"Back-End Development Frameworks"
  },
  {
    id:1,
    modulename:"Introduction to Web Development"
  },
  {
    id:2,
    modulename:"Front-End Development Frameworks"
  },{
    id:3,
    modulename:"Back-End Development Frameworks"
  },
  {
    id:1,
    modulename:"Introduction to Web Development"
  },
  {
    id:2,
    modulename:"Front-End Development Frameworks"
  },{
    id:3,
    modulename:"Back-End Development Frameworks"
  },
  {
    id:1,
    modulename:"Introduction to Web Development"
  },
  {
    id:2,
    modulename:"Front-End Development Frameworks"
  },{
    id:3,
    modulename:"Back-End Development Frameworks"
  },
  {
    id:1,
    modulename:"Introduction to Web Development"
  },
  {
    id:2,
    modulename:"Front-End Development Frameworks"
  },{
    id:3,
    modulename:"Back-End Development Frameworks"
  }
]
const Javacurriculum = () => {
  return (
    <div className="big-container1">
      <div className="left-section1">
        {/* Left section with background color */}
      </div>
      <div className="right-section1">
        <div>
          <h1 className="curriculumh1">JAVA <i><span style={{ color: "gold" }}>Curriculum</span></i></h1>
        </div>
        {
        info.map((item)=>(
          <div className="curriculum-header" >
          <h3 className='curr-font'>{item.modulename}</h3>
        </div>
        ))
       }
      </div>
    </div>
  );
};

export default Javacurriculum;
