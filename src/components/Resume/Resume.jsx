import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <p className="resume-description">
        Here you can find my professional resume detailing my skills, experience, and education. Feel free to download it and reach out if you have any questions.
      </p>
      <div className="resume-actions">
        <a href="/MyResume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">Download My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
