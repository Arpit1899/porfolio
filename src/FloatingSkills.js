import React from "react";
import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000;
  width: 100%;
  min-height: 10vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  color: #fff;
  font-size: 1.2rem;
  animation: ${floating} 5s ease-in-out infinite;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1),
    0 1px 3px rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem;
    margin: 0.5rem;
  }
`;

const skills = [
  "Python",
  "C",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  ".NET",
  "Bash",
  "PowerShell",
  "MySQL",
  "PostgreSQL",
  "React.js",
  "React Native",
  "Node.js",
  "AngularJS",
  "jQuery",
  "WordPress",
  "Bootstrap",
  "Figma",
  "AWS",
  "Google Cloud Platform",
  "Jenkins",
  "Octopus",
  "Android Studio",
  "Git",
  "Visual Studio",
  "Shopify",
];

const FloatingSkills = () => {
  return (
    <SkillContainer>
      {skills.map((skill, index) => (
        <SkillBox
          key={index}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          {skill}
        </SkillBox>
      ))}
    </SkillContainer>
  );
};

export default FloatingSkills;
