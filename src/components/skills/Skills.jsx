import React from "react";
import "./Skills.css";
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Proficiency</h2>
      <div className="container skills__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>HTML</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>CSS</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Bootstrap</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Tailwind CSS</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>React.js</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Redux Toolkit</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Next.js</h4>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Node.js</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Express.js</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
        <div className="skill__authentication">
          <h3>Authentication</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Firebase Authentication</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>JWT Authentication</h4>
            </article>
          </div>
        </div>
        <div className="skill__ui-design">
          <h3>UI Design Libraries</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>AOS</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Ant Design</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Chakra UI</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Material UI</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
