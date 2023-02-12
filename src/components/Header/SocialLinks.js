import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com/in" target={"__blank"}><BsLinkedin /></a>
      <a href="https://github.com" target={"__blank"}><FaGithub /></a>
      <a href="https://gitlab.com" target={"__blank"}><FaGitlab /></a>
    </div>
  )
}

export default SocialLinks