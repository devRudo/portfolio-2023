import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/devrudovj/" target={'__blank'}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/devRudo" target={'__blank'}>
        <FaGithub />
      </a>
      <a href="https://gitlab.com/devRudo" target={'__blank'}>
        <FaGitlab />
      </a>
    </div>
  );
};

export default SocialLinks;
