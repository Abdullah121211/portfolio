import React from 'react';
import './skill.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPaintBrush, FaBootstrap } from 'react-icons/fa';

const Skill = () => {
  const skills = [
    { name: 'HTML 5', level: '90%', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'CSS 3', level: '85%', icon: <FaCss3Alt color="#264de4" /> },
    { name: 'JavaScript', level: '80%', icon: <FaJs color="#f0db4f" /> },
    { name: 'React', level: '75%', icon: <FaReact color="#61dafb" /> },
    { name: 'Node.js', level: '70%', icon: <FaNodeJs color="#68a063" /> },
    { name: 'UI/UX Design', level: '80%', icon: <FaPaintBrush color="#ff6347" /> },
    { name: 'Bootstrap', level: '85%', icon: <FaBootstrap color="#563d7c" /> },
  ];

  return (
    <div className="skill-page">
      <h1 className="skill-title">My Professional Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h2>{skill.name}</h2>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
