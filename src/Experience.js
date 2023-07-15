import React from "react";
import "./Experience.css";

const Portfolio = () => {
  const experiences = [
    {
      company: "Amazon",
      position: "Software Development Engineer",
      location: "Hyderabad, IN",
      dates: "July 2022 - July 2023",
      description: "• Developed low latency batch APIs for a Tier 1 service handling over several million requests per minute \n" + 
	  "• Designed a Java library to fetch and consume data from a SQL data store with minimal latency (<200ms). " +
	  "Implemented config driven credentials management and user customizable retry mechanism \n" +
	  "• Enabled full CD pipeline for 2 services by adding integration tests, pipeline blockers, alarms, and increasing code coverage of packages (upto 10%)",
      learnings: ["Java", "API Development", "Spring", "CI-CD"],
    },
    {
      company: "Software Development Engineering Intern",
      position: "Amazon",
      location: "Hyderabad, IN",
      dates: "Feb 2022 - June 2022",
      description: "• Designed and implemented a generic, reusable, dynamic config driven Log4j filter to control logging rate in a Tier 1 service \n • Developed a back-end API to recommend an exhaustive list of required entities, for the selected entity, in an entity access request with <250 ms latency. Integrated a UI component to fetch and display the list of required entities along with functionality to directly add the recommended entities to entity access request",
      learnings: ["Spring MVC", "Log4j", "JSP"],
    },
    {
      company: "Company B",
      position: "Amazon",
      location: "City B",
      dates: "Jan 2021 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      learnings: ["Learning 1", "Learning 2", "Learning 3"],
    },
    // Add more experiences here
  ];

  return (
    <div className="portfolio">
      <h1>Experiences</h1>
      {experiences.map((experience, index) => (
        <div className="experience-card" key={index}>
          <div className="info-container-experiences">
            <h3>{experience.company}</h3>
            <h4>{experience.location}</h4>
            <h4>{experience.dates}</h4>
			<h5>Deliverables</h5>
            <p><pre>{experience.description}</pre></p>
			<h5>Learnings</h5>
            <ul>
              {experience.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
          <div className="image-container-experiences">
            <div className={`circle-experiences-{$company}}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
