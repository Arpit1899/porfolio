import React, { useState } from "react";
import "./Project.css";
import { UilGithub } from "@iconscout/react-unicons";
import { motion, AnimatePresence } from "framer-motion";

function Project({ title, description, imageUrl, tech, githubLink, link, moreInfo }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  return (
    <div className="project">
      <AnimatePresence initial={false}>
        {isFlipped ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            className="project-text"
          >
            <h2>{title}</h2>
            <p>{moreInfo}</p>
            <div className="button-container">
              <a href={githubLink} className="icon-link">
                <UilGithub size="38" />
              </a>
              <a href={link} className="button" onClick={handleReadMoreClick}>
                Show Less
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
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
              <a href="#" className="button" onClick={handleReadMoreClick}>
                Read More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
