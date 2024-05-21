import React from "react";
import "./About.css";
import ME from "../../assets/emad-iP.jpeg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hi, I'm Emad Uddin Emad, a passionate and dedicated student pursuing
            a B.Sc. in Computer Science and Engineering at Mohammadpur Kendriya
            College. I have a strong interest in web development, particularly
            in front-end technologies such as React.
          </p>
          <br />

          <p>
            Through a combination of online resources, including YouTube
            tutorials and other learning platforms, I have acquired a
            comprehensive understanding of HTML5, CSS3, and JavaScript. My focus
            has been on mastering React.js and its core principles, utilizing it
            to build dynamic web interfaces. After that, I will start learning
            Node.js, Express.js, and MongoDB Database for the backend because I
            want to be a MERN Stack developer.
          </p>
          <br />
        
          <p>
            I am currently seeking an internship opportunity to enhance my
            skills in React.js development. If you have any questions or would
            like to connect, feel free to reach out to me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
