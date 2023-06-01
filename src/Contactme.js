import React from "react";
import { UilGithub, UilLinkedin, UilTwitter } from "@iconscout/react-unicons";

const ContactMe = () => {
  return (
    <div className="icon-container">
      dfdsvsdv dsvd
      <a
        href="https://github.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilGithub size="38" />
      </a>
      <a
        href="https://www.linkedin.com/in/your_username/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilLinkedin size="38" />
      </a>
      <a
        href="https://twitter.com/your_twitter_username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilTwitter size="38" />
      </a>
    </div>
  );
};

export default ContactMe;
