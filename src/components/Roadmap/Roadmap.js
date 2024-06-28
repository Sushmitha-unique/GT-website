import React, { useState } from 'react';
import './Roadmap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const info = [
    {
        id: 1,
        modulename:"Introduction to Web Development",
        topic1:"HTML (HyperText Markup Language)",
        topic2:"CSS (Cascading Style Sheets)",
        topic3:"JavaScript Basics and Advanced Concepts"
    },
    {
        id: 2,
        modulename:"Front-End Development Frameworks",
        topic1:"React",
        topic2:"Angular",
        topic3:"Vue.js"
    },
    {
        id: 3,
        modulename:"Back-End Development with Node.js",
        topic1:"Express.js",
        topic2:"Database Management",
        topic3:"APIs and RESTful Services"
    }
]
const  Roadmap = () => {
  const sectionCount = 3;
  const [visibleSection, setVisibleSection] = useState(null);
  const [checkedSections, setCheckedSections] = useState(Array(sectionCount).fill(false));

  const toggleCurriculumVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedSections = [...checkedSections];
    updatedCheckedSections[index] = !updatedCheckedSections[index];
    setCheckedSections(updatedCheckedSections);
  };

  const progressPercentage = (checkedSections.filter(Boolean).length / sectionCount) * 100;

  return (
    <div className="big-container2">
      <div className="left-section2"></div>
      <div className="right-section2">
        <div>
          <h1 className="curriculumh1">WEB <i><span className="highlight">Curriculum</span></i></h1>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
       
        {info.map((item,i) => (
          <div key={item.id}>
            <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(i + 1)}>
            <input
                  type="checkbox"
                  checked={checkedSections[i]}
                  onChange={() => handleCheckboxChange(i)}
                  className="curriculum-checkbox"
                /> 
              <h3 className='curr-font'>{item.modulename}</h3>
              <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === (i + 1) ? 'rotate' : ''}`} />
            </div>
            <div className={`curriculum-content ${visibleSection === (i + 1) ? 'show' : ''}`}>
              <ul>
                <li>{item.topic1}</li>
                <li>{item.topic2}</li>
                <li>{item.topic3}</li>
              </ul>
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Roadmap;
