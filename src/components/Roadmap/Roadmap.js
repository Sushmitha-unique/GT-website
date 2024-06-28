import React, { useState } from 'react';
import './Roadmap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const info = [
    { id: 1, modulename: "Introduction to Web Development", topic1: "HTML (HyperText Markup Language)", topic2: "CSS (Cascading Style Sheets)", topic3: "JavaScript Basics and Advanced Concepts" },
    { id: 2, modulename: "Front-End Development Frameworks", topic1: "React", topic2: "Angular", topic3: "Vue.js" },
    { id: 3, modulename: "Back-End Development with Node.js", topic1: "Express.js", topic2: "Database Management", topic3: "APIs and RESTful Services" },
    { id: 4, modulename: "Introduction to Web Development", topic1: "HTML (HyperText Markup Language)", topic2: "CSS (Cascading Style Sheets)", topic3: "JavaScript Basics and Advanced Concepts" },
    { id: 5, modulename: "Front-End Development Frameworks", topic1: "React", topic2: "Angular", topic3: "Vue.js" },
    { id: 6, modulename: "Back-End Development with Node.js", topic1: "Express.js", topic2: "Database Management", topic3: "APIs and RESTful Services" },
    { id: 7, modulename: "Introduction to Web Development", topic1: "HTML (HyperText Markup Language)", topic2: "CSS (Cascading Style Sheets)", topic3: "JavaScript Basics and Advanced Concepts" },
    { id: 8, modulename: "Front-End Development Frameworks", topic1: "React", topic2: "Angular", topic3: "Vue.js" },
    { id: 9, modulename: "Back-End Development with Node.js", topic1: "Express.js", topic2: "Database Management", topic3: "APIs and RESTful Services" },
    { id: 10, modulename: "Introduction to Web Development", topic1: "HTML (HyperText Markup Language)", topic2: "CSS (Cascading Style Sheets)", topic3: "JavaScript Basics and Advanced Concepts" },
    { id: 11, modulename: "Front-End Development Frameworks", topic1: "React", topic2: "Angular", topic3: "Vue.js" },
    { id: 12, modulename: "Back-End Development with Node.js", topic1: "Express.js", topic2: "Database Management", topic3: "APIs and RESTful Services" },
    { id: 13, modulename: "Introduction to Web Development", topic1: "HTML (HyperText Markup Language)", topic2: "CSS (Cascading Style Sheets)", topic3: "JavaScript Basics and Advanced Concepts" },
    { id: 14, modulename: "Front-End Development Frameworks", topic1: "React", topic2: "Angular", topic3: "Vue.js" },
    { id: 15, modulename: "Back-End Development with Node.js", topic1: "Express.js", topic2: "Database Management", topic3: "APIs and RESTful Services" }
];

const Roadmap = () => {
    const [visibleSection, setVisibleSection] = useState(null);
    const [checkedSections, setCheckedSections] = useState(Array(info.length).fill(false));
    const [levelChecked, setLevelChecked] = useState([false, false, false, false]);

    const toggleCurriculumVisibility = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    const handleCheckboxChange = (index) => {
        const updatedCheckedSections = [...checkedSections];
        updatedCheckedSections[index] = !updatedCheckedSections[index];
        setCheckedSections(updatedCheckedSections);
        const totalChecked = updatedCheckedSections.filter(Boolean).length;
        const newLevelChecked = [...levelChecked];
        if (totalChecked >= 15) {
            newLevelChecked[3] = true; 
            newLevelChecked[2] = true; 
            newLevelChecked[1] = true; 
            newLevelChecked[0] = true; 
        } else if (totalChecked >= 12) {
            newLevelChecked[3] = false; 
            newLevelChecked[2] = true; 
            newLevelChecked[1] = true; 
            newLevelChecked[0] = true; 
        } else if (totalChecked >= 8) {
            newLevelChecked[3] = false; 
            newLevelChecked[2] = false;
            newLevelChecked[1] = true; 
            newLevelChecked[0] = true; 
        } else if (totalChecked >= 4) {
            newLevelChecked[3] = false;
            newLevelChecked[2] = false; 
            newLevelChecked[1] = false; 
            newLevelChecked[0] = true; 
        } else {
            newLevelChecked.fill(false);
        }
        setLevelChecked(newLevelChecked);
    };

    const progressPercentage = (checkedSections.filter(Boolean).length / info.length) * 100;

    return (
        <div className="big-container1">
            <div className='left'>
                <h1 style={{ textAlign: "center" }}>Levels</h1>
                <div className="curriculum-header1">
                    <h3 className='curr-font'>Beginner</h3>
                    <input
                        type="checkbox"
                        className="curriculum-checkbox"
                        checked={levelChecked[0]}
                        readOnly
                    />
                </div>
                <div className="curriculum-header1">
                    <h3 className='curr-font'>Intermediate</h3>
                    <input
                        type="checkbox"
                        className="curriculum-checkbox"
                        checked={levelChecked[1]}
                        readOnly
                    />
                </div>
                <div className="curriculum-header1">
                    <h3 className='curr-font'>Advanced</h3>
                    <input
                        type="checkbox"
                        className="curriculum-checkbox"
                        checked={levelChecked[2]}
                        readOnly
                    />
                </div>
                <div className="curriculum-header1">
                    <h3 className='curr-font'>Professional</h3>
                    <input
                        type="checkbox"
                        className="curriculum-checkbox"
                        checked={levelChecked[3]}
                        readOnly
                    />
                </div>
            </div>
            <div className="right">
                <div>
                    <h1 className="curriculumh1">WEB <i><span className="highlight">Curriculum</span></i></h1>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                {info.map((item, i) => (
                    <div key={item.id}>
                        <div className="curriculum-header" onClick={() => toggleCurriculumVisibility(i + 1)}>
                            <h3 className='curr-font'>{item.modulename}</h3>
                            <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === (i + 1) ? 'rotate' : ''}`} />
                            <input
                                type="checkbox"
                                checked={checkedSections[i]}
                                onChange={() => handleCheckboxChange(i)}
                                className="curriculum-checkbox"
                            />
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
