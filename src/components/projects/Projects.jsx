import React from "react";
import "./Projects.css";
import PI from "../../assets/fitclub-gym-web-netlify-app.png"
import PI2 from "../../assets/quiz-app-emad.png"
import PI3 from "../../assets/alponayboishak.png"
import PI4 from "../../assets/task-management_miui.png"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI3} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Alponay Boishakh</h3>
            <p className="text-sm leading-5">
              A dynamic website to dive into Bengali traditions, colorful
              festivities, and cultural delights as we embrace the spirit of
              Bengali New Year. (Freelance Project from{" "}
              <a href="https://xri.com.bd" target="_blank">
                XR Interactive
              </a>
              )
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="#projects"
              className="btn !py-1 !px-2 text-sm leading-7"
              // target="_blank"
            >
              Code Private
            </a>
            <a
              href="https://alponayboishakh.com"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI4} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Task Management System</h3>
            <p className="text-sm leading-5">
              A dynamic app built in MERN stack, enables users to efficiently
              create, organize, and track tasks for enhanced productivity and
              seamless project management.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Task-Management-System.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Client Code
            </a>
            <a
              href="https://github.com/emaduddin678/Task-management-server.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Server Code
            </a>
            <a
              href="https://alponayboishakh.com"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">The Fitclub Gym</h3>
            <p className="text-sm leading-5">
              A static website for learning React structure, best practices,
              designing and simple animation with Framer motion.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Client code
            </a>
            <a
              href="https://fitclub-gym-web.netlify.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            {" "}
            <div className="portfolio_item-img">
              <img src={PI2} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Quiz App from LWS</h3>
            <p className="text-sm leading-5">
              A quiz app for learning React and Firebase. Routes are protected
              and each topic has 4 questions.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Client code
            </a>
            <a
              href="https://quiz-app-emad.netlify.app"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
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
