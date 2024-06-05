import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="work-container">
        <div className="work-cards">
          <div className="work-card">
            <h3>My Fitness app</h3>
            <p>Crafting a workout planner app stems from a desire to empower individuals in their fitness journey. It's about providing a structured platform for users to organize their workouts efficiently, track progress, and stay motivated towards achieving their health and wellness goals. (Hosting app does take a while to load at times).</p>
            <a href="https://github.com/Devunte/Fitness-For-U" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            <a href="https://fitness-for-u-pxjn.onrender.com" target="_blank" rel="noopener noreferrer">Deployed Link</a>
          </div>
          <div className="work-card">
            <h3>Meal Prep Site</h3>
            <p>This project is driven by a passion to create an easily accessible database for meal recipes and cocktails, offering users a seamless experience to explore a diverse array of culinary delights and mixological creations.</p>
            <a href="https://github.com/Devunte/Meal-Plan" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            <a href="https://devunte.github.io/Meal-Plan/" target="_blank" rel="noopener noreferrer">Deployed Link</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;

