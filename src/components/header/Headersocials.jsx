import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiSololearn } from 'react-icons/si';


const socialsData = [
  { href: 'https://www.linkedin.com/in/augustine-john-777028243/', icon: <BsLinkedin /> },
  { href: 'https://github.com/awehstino', icon: <FaGithub /> },
  { href: 'https://sololearn.com/profile/14927141', icon: <SiSololearn /> },
];

const Headersocials = () => {
  return (
    <div className="headersocials">
      {socialsData.map((social) => (
        <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
      
    </div>
  );
};

export default Headersocials;