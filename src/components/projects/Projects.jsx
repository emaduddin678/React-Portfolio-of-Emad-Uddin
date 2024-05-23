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
        {/* single Project  */}
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI} alt="" />
          </div>
          <h3 className="leading-5 !mt-3 !mb-3">The Fitclub Gym</h3>
          <p className="text-base leading-5">
            A static website for learning React structure, best practices,
            designing and simple animation with Framer motion.
          </p>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-base leading-7"
              target="_blank"
            >
              Frontend code
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary !py-1 !px-2"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI} alt="" />
          </div>
          <h3 className="leading-5 !mt-3 !mb-3">The Fitclub Gym</h3>
          <p className="text-base leading-5">
            A static website for learning React structure, best practices,
            designing and simple animation with Framer motion.
          </p>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-base leading-7"
              target="_blank"
            >
              Frontend code
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary !py-1 !px-2"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={PI2} alt="" />
          </div>
          <h3 className="leading-5 !mt-3 !mb-3">Quiz App from LWS</h3>
          <p className="text-base leading-5">
            A quiz app for learning React and Firebase. Routes are protected and
            each topic has 4 questions.
          </p>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-base leading-7"
              target="_blank"
            >
              Frontend code
            </a>
            <a
              href="https://quiz-app-emad.netlify.app"
              className="btn btn-primary !py-1 !px-2"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
      </div>
    </section>
  );
};

export default Projects;
