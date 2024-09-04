import React from "react";
import "./LearningProjects.css";
import poll from "../../assets/poll.png"
import tictac from "../../assets/tictactoe.png";
import todolist from "../../assets/todolist.png"
import eidcard from "../../assets/eidcard.png";
import ecommerce from "../../assets/ecommerce.png";
import restautent from "../../assets/restautent.png";


const LearningProjects = () => {
  return (
    <section id="projects">
      <h5>
        When I start learning React.js I created these sites using tutorial
      </h5>
      <h2>My React Journey</h2>

      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={poll} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Smart Poll</h3>
            <p className="text-sm leading-5">
              A simple poll site for share your vote. It contains all of crud
              operation. It is from stack learner youtube channel for practicing
              React.js.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Smart-Poll.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Frontend code
            </a>
            <a
              href="https://super-kleicha-c76029.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={tictac} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Tic Tac Toe</h3>
            <p className="text-sm leading-5">
              A simple tic tac toe game from stack learner youtube channel for
              practicing React.js.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Tic-Tac-2nd-try.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Game Code
            </a>
            <a
              href="https://lets-win-tic-tac-toe.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={todolist} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Stack Todo List</h3>
            <p className="text-sm leading-5">
              A simple crud operation in frontend site from stack learner
              youtube channel for practicing React.js.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Stack-Todo.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Todo List Code
            </a>
            <a
              href="https://chic-twilight-9e9439.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={eidcard} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">
              Smart Eid Project for XR Interactive
            </h3>
            <p className="text-sm leading-5">
              Wish a happy Eid with virtual Eid Card.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Eid-Card-Astronaut-Xri.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Frontend Code
            </a>
            <a
              href="https://smarteidcardastronaut.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={ecommerce} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Next.js Practice</h3>
            <p className="text-sm leading-5">
              A Frontend cart practice in Next.js with interaction.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Task-for-Tech_Analytic.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Frontend Code
            </a>
            <a
              href="https://techanalytictask.netlify.app/"
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
            <div
              className="portfolio_item-img"
              style={{ backgroundColor: "white" }}
            >
              <img src={restautent} alt="restautent" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Restaurent Practice</h3>
            <p className="text-sm leading-5">
              A Frontend restaurent static site making practice in html, css and
              JavaScript.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Restaurant-portfolio-1.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Frontend Code
            </a>
            <a
              href="https://emaduddin678.github.io/Restaurant-portfolio-1/"
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

export default LearningProjects;
