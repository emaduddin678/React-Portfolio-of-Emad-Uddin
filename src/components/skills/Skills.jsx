import React from "react";
import './Skills.css'
import { HiBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skills__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>HTML5</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>CSS3</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>React</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Bootstrap</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Node JS</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Express JS</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>MongoDB</h4>
            </article>
            <article className="skill__details">
              <HiBadgeCheck />
              <h4>Firebase</h4>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
