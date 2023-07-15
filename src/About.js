import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
	  	<div className="info-container">
          <h2 className="name">Hello I'm Akshay Tiwari</h2>
          <p className="description">I'm a Master of Science in Computer Science student at Pennsylvania State University</p>
          <div className="button-container">
            <a href="#experience" className="button">Experience</a>
            <a href="#work" className="button">Work</a>
            <a href="#projects" className="button">Projects</a>
            <a href="#resume" className="button">Resume</a>
          </div>
        </div>
        <div className="image-container">
          <div className="circle" />
        </div>
      </div>
    </section>
  );
};

export default About;
