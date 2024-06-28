import React, { useState } from 'react';
import './Pythoncurriculum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Pythoncurriculum= () => {
  // State to track which curriculum section is visible
  const [visibleSection, setVisibleSection] = useState(null);

  // Function to toggle visibility
  const toggleCurriculumVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="big-container1">
      <div className="left-section1">
        {/* Left section with background color */}
      </div>
      <div className="right-section1">
        <div>
          <h1 className="curriculumh1">PYTHON <i><span style={{ color: "gold" }}>Curriculum</span></i></h1>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(1)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 1 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection === 1 ? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(2)}>
          <h3 className='curr-font'>Front-End Development Frameworks</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 2 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection === 2 ? 'show' : ''}`}>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(3)}>
          <h3 className='curr-font'>Back-End Development with Node.js</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 3 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection === 3 ? 'show' : ''}`}>
          <ul>
            <li>Express.js</li>
            <li>Database Management</li>
            <li>APIs and RESTful Services</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(4)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 4 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  4? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(5)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 5 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  5? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(6)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 6 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  6? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(7)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 7 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  7? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(8)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 8 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  8? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(9)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 9 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  9? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(10)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 10 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  10? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(11)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 11 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  11? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(12)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 12? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  12? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(13)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 13 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  13? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(14)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 14 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  14? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>
        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(15)}>
          <h3 className='curr-font'>Introduction to Web Development</h3>
          <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === 15 ? 'rotate' : ''}`} />
        </div>
        <div className={`curriculum-content ${visibleSection ===  15? 'show' : ''}`}>
          <ul>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript Basics and Advanced Concepts</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Pythoncurriculum;
