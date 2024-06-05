import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import './app.css';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="about-me-container">
        <img src="Avatar.jpg" alt="Avatar" className="profile-picture" />
        <h2 className="about-me-heading">About Me</h2>
        <p className="about-me-content">
          Transitioning from marketing to full stack web development at SMU, I bring a determined mindset honed through my experience as a college athlete. My aspiration is to thrive in a company setting, leveraging my newfound skills to their fullest potential. Through months of dedicated study, I'm poised to achieve my career and financial objectives. The discipline instilled from managing multiple tasks under pressure, whether on the field or in the classroom, serves as a solid foundation for my journey into the tech industry. With each challenge, I am committed to delivering valuable performance and continuously pushing the boundaries of my capabilities.
        </p>
      </div>
      <Outlet /> {/* This will render the child routes */}
    </>
  );
}

export default App;


