import React from "react";
import "./Projects.css";
import PI from "../../assets/fitclub-gym-web-netlify-app.png"
import PI2 from "../../assets/quiz-app-emad-netlify-app-2023-06-10-00_17_42.png"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI} alt="" />
          </div>
          <h3>The Fitclub Gym</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI2} alt="" />
          </div>
          <h3>Quiz App from LWS</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://quiz-app-emad.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI} alt="" />
          </div>
          <h3>The Fitclub Gym</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI2} alt="" />
          </div>
          <h3>Quiz App from LWS</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://quiz-app-emad.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI} alt="" />
          </div>
          <h3>The Fitclub Gym</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI2} alt="" />
          </div>
          <h3>Quiz App from LWS</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/emaduddin678"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://quiz-app-emad.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
