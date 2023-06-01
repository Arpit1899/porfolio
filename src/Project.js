import React from "react";
import "./Project.css";
import { UilGithub } from "@iconscout/react-unicons";
import { motion, } from "framer-motion";
function Project({ title, description, imageUrl, tech, githubLink, link }) {
  return (
    <div className="project">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        className="project-text"
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tech">{tech}</div>
        <motion.div
          whileHover={{
            scale: 1.1,
            x: 10,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="button-container"
        >
          <a href={githubLink} className="icon-link">
            <UilGithub size="38" />
          </a>
          <a href={link} className="button">
            Read More
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        className="image"
      >
        <img src={imageUrl} alt={title} className="image" />
      </motion.div>
    </div>
  );
}
export default Project;
