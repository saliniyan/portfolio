import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaKeyboard } from 'react-icons/fa';

const SocialHandles = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="flex gap-5 my-4">
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://github.com/saliniyan" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://www.linkedin.com/in/saliniyan-p-65231b256/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://leetcode.com/u/saliniyan/" target="_blank" rel="noreferrer">
          <FaKeyboard />
        </a>
    </div>
  )
}

export default SocialHandles