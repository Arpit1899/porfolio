import React from "react";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div className="timeline">
      <div className="timeline-item timeline-item-right">
        <div className="timeline-item-content">
          <h3>Dukaan / Co-Founder, Lead Developer</h3>
          <h4>March 2022 - Present, Philadelphia, PA</h4>
          <p>
            Created and launched a successful online Shopify store that delivers
            Indian snacks within a 10-mile radius of Philadelphia within 30
            minutes. Generated $10,000 in revenue within the first three months
            of operation, with 100% month-to-month growth.
          </p>
        </div>
      </div>

      <div className="timeline-item timeline-item-left">
        <div className="timeline-item-content">
          <h3>Parcelist, LLC / Full Stack Developer</h3>
          <h4>December 2021 – February 2022, Philadelphia, PA</h4>
          <p>
            Developed KIOSK System to process contactless delivery and pickup
            using React.js in Frontend and Node.js in Backend. Programmed REST
            APIs to implement services/features for Internal Admin Panel.
          </p>
        </div>
      </div>

      <div className="timeline-item timeline-item-right">
        <div className="timeline-item-content">
          <h3>iPipeline, Inc. / Software Engineer</h3>
          <h4>September 2020 - March 2021, Philadelphia, PA</h4>
          <p>
            Automated daily tasks with PowerShell and deployed on AWS to
            increase efficiency by 75%. Created automated CI/CD pipelines in
            Jenkins using Bash to deploy the software.
          </p>
        </div>
      </div>

      <div className="timeline-item timeline-item-left">
        <div className="timeline-item-content">
          <h3>PJM Interconnection / Application Developer</h3>
          <h4>October 2019 - March 2020, Audubon, PA</h4>
          <p>
            Refactored C# scripts for Resource Managing/Scheduling software for
            the company employees. Developed Bash Script to shift/remove user
            information implemented in a web tool serving as a User Database
            manager.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
