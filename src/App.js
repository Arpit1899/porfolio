import React, { useState, useEffect } from "react";
import "./App.css";
import { UilGithub, UilLinkedin, UilTwitter,UilEnvelopeEdit } from "@iconscout/react-unicons";
import screenshot from "./4.png";
import screenshot2 from "./project2_img.png";
import screenshot4 from "./Materials.png";
import screenshot3 from "./noteTaking.png";
import Profile from "./profile.png";

import ExperienceComponent from "./ExperienceComponent";
import Project from "./Project";
import { motion} from "framer-motion";

function App() {
  const email = "arpitparanjpe18@gmail.com";
  const [ ,setShowHeader] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [setShowHeader]);

  return (
    <div className="App">
      <div className="icon-container">
        <a href="https://github.com/Arpit1899">
          <UilGithub size="38" />
        </a>
        <a href="https://www.linkedin.com/in/arpitparanjpe/">
          <UilLinkedin size="38" />
        </a>
        <a href="https://twitter.com/arpit_paranjpe">
          <UilTwitter size="38" />
        </a>
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.5, bounce: 0.6 }}
        className="intro-section"
      >
        {/* <img src={Profile} alt="Arpit Paranjpe" className="profile-image" /> */}
        <h1>Arpit Paranjpe</h1>
        <p>Crafting my creativity into satisfying products</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.5, bounce: 0.6 }}
        className="About_me"
      >
        <div className="about-wrapper">
          <img src={Profile} alt="Arpit Paranjpe" className="profile-image" />
          <div className="aboutme_content">
            <h1 className="aboutMe-title">About me</h1>
            <p>
              Drexel University senior majoring in Computer Science, passionate
              about new technologies and intriguing projects, seeking Software
              Engineer opportunities with over a year of hands-on experience.
            </p>
          </div>
        </div>
      </motion.div>
      <h1 className="project-title">Things I've worked on</h1>
      
      <div className="project-section">
        <Project
          title="Dukaan"
          description="Dukaan is your local delivery service for all those delicious Indian Snacks that have a nostalgic touch to them. We hope not only to remind you but also to share those feelings with your friends and families."
          imageUrl={screenshot}
          link="https://github.com/Arpit1899/Dukaan-Design-/blob/main/README.md"
          githubLink="https://github.com/Arpit1899/Dukaan-Design-"
          tech="ReactNative . Node.js . GoogleCloud . StripeAPI . DoorDashAPI"
          moreInfo="Engineered and launched a Shopify store for rapid delivery of Indian snacks in Philadelphia. Architected and developed a responsive mobile application using React Native and Node.js, prioritizing usability and performance"
        />
        <div className="line"></div>
        <Project
          title="WhisperHelp"
          description="Discover fun, compact voice assistant, harnessing WhisperAPI and ChatGPT API to chat with ChatGPT in 99+ languages - making
          communication a breeze!"
          imageUrl={screenshot2}
          link="https://github.com/Arpit1899/whisper-help#readme"
          githubLink="https://github.com/Arpit1899/whisper-help"
          tech="React . Node.js . WhisperAPI . ChatGPT API"
          moreInfo="Conceived and developed a voice-powered assistant, using React, OpenAI's Whisper API and GPT-3.5 model
          • Enabled users to interact with an assistant capable of understanding and responding in 99+ languages, demonstrating the power of advanced Automatic Speech Recognition systems"
        />
        <div className="line"></div>
        <Project
          title="NoteTaking"
          link="https://github.com/Arpit1899/note-taking-app#readme"
          githubLink="https://github.com/Arpit1899/note-taking-app"
          description="This is a simple React application for taking notes using OpenAI's GPT-3 model to generate text suggestions"
          imageUrl={screenshot3}
          tech="React.js . Node.js . OpenAI API . Express.js"
          moreInfo="React Note Taking App is a unique application that helps you manage your notes. It's built with React and utilizes OpenAI's GPT-3 model to provide intelligent text suggestions. This application streamlines note creation with AI technology, enhancing your note-taking experience"
        />
        <div className="line"></div>
        <Project
          title="CatalogApp"
          githubLink="https://github.com/Arpit1899/CatalogApp"
          link="https://github.com/Arpit1899/CatalogApp#readme"
          description="Web application that allows users to create a list of items with
          details. Useful for construction items"
          imageUrl={screenshot4}
          tech="React.js . Node.js . Express.js . MongoDB"
          moreInfo="The Materials Web App is a dynamic platform designed for managing item lists with detailed specifications. It's a robust application built using React for the frontend, and Node.js with Express for the backend. This web app lets users add, edit, and delete items, while also providing functionalities for server interaction and data submission to an API"
        />
      </div>
      <h2 className="project-title">Where have I worked</h2>
      <div className="experience-section">
        <ExperienceComponent />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
        className="contact"
      >
        {" "}
        <h1 className="title">Reach me at</h1>
        <motion.div
          animate={{
            initial: { opacity: 0 },
            whileInView: "visible",
            transition: { duration: 3, ease: "easeOut" },
          }}
          className="contact-me"
        >
          
          <a
            href="https://www.linkedin.com/in/arpitparanjpe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilLinkedin size="38" />
          </a>
          <a
            className="icon"
            href="https://twitter.com/arpit_paranjpe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilTwitter size="38" />
          </a>
          <p>
            <a href={`mailto:${email}`}> <UilEnvelopeEdit size="38" /></a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
