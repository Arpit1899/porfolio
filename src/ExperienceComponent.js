import React, { useState } from "react";
import "./ExperienceComponent.css";
import { motion } from "framer-motion";
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
const ExperienceComponent = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  

  const experiences = [
    {
      position: " Co-Founder, Lead Developer",
      company: "Dukaan",
      timeline: "March 2022 - Present, Philadelphia, PA",
      description: [
        "Created and launched a successful online Shopify store that delivers Indian snacks within a 10-mile radius of Philadelphia within 30 minutes",
        "Generated $10,000 in revenue within the first three months of operation, with 100% month-to-month growth",
        "Currently leading the development of a mobile application for the business using React Native, Node.js, Google Firebase, and Stripe",
        "Won $12,500 at the Drexel Startup Fest for our mobile application, and leading a team of six to coordinate marketing, logistics, and operations",
      ],
    },
    {
      position: " Full Stack Developer",
      company: "Parcelist",
      timeline: "December 2021 – February 2022, Philadelphia, PA",
      description: [
        "Developed KIOSK System to process contactless delivery and pickup using React.js in Frontend and Node.js in Backend",
        "Programmed REST APIs to implement services/features for Internal Admin Panel",
        "Streamlined the registration/renewal process developing automatic subscription functionality for the platform",
        "Developed designs and prototypes (UI/UX) using Figma for Internal Admin Panel to increase the user/landlord engagement",
      ],
    },
    {
      position: "Software Engineer",
      company: "iPipeline, Inc.",
      timeline: "September 2020 - March 2021, Philadelphia, PA",
      description: [
        "Automated daily tasks with PowerShell and deployed on AWS to increase efficiency by 75%",
        "Created automated CI/CD pipelines in Jenkins using Bash to deploy the software",
        "Synchronized and migrated data from TFS to GitHub; Validated packages on Jenkins and implemented variables on Octopus",
        "Developed screens using iPipeline’s proprietary designer and REST APIs, Debugging and testing in .NET",
      ],
    },
    {
      position: "Application Developer",
      company: "PJM Interconnection",
      timeline: "October 2019 - March 2020, Audubon, PA",
      description: [
        "Refactored C# scripts for Resource Managing/Scheduling software for the company employees",
        "Developed Bash Script to shift/remove user information implemented in a web tool serving as a User Database manager",
        "Styled leading company websites using AngularJS Framework; Performed debugging using JavaScript and HTML",
        "Created PowerShell Scripts for in-company Cloud Storage to diminish cases of missing/corrupted files during file transfer",
      ],
    },
  ];

  const nextExperience = () => {
    setSelectedExperience((prevExperience) => (prevExperience + 1) % experiences.length);
  };

  const previousExperience = () => {
    setSelectedExperience((prevExperience) => (prevExperience - 1 + experiences.length) % experiences.length);
  };

  const { position, company, timeline, description } = experiences[selectedExperience];

  return (
    <div className="experience-component">
      <UilAngleLeft className="arrow left" size="40" onClick={previousExperience} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
        className="details"
      >
        <div className="position">{position}</div>
        <div className="timeline">{timeline}</div>
        <div className="company">{company}</div>

        <div className="detail-points">
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <UilAngleRight className="arrow right" size="40"onClick={nextExperience} />
    </div>
  );
};

export default ExperienceComponent;