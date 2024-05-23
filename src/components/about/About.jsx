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
            Hi, I'm Emad Uddin Emad, a passionate and dedicated Frontend-focused
            MERN Stack Developer. As a Computer Science student with a deep
            interest in technology, I began my journey in web development in
            January 2022.
          </p>
          <br />

          <p>
            Through a combination of online resources, such as YouTube tutorials
            and various learning platforms, I have acquired the skills of
            front-end and back-end development.
          </p>
          <p>
            My core frontend skills include HTML, CSS, Tailwind CSS, Bootstrap,
            JavaScript, React.js, Redux, and Next.js. On the backend, I possess
            intermediate-level expertise in Node.js, Express.js, and MongoDB. I
            also have knowledge of Firebase authentication and JWT (JSON Web
            Tokens). Additionally, I am proficient with various UI design
            libraries and packages such as AOS, Ant Design, Chakra UI, and Material UI. I am
            well-versed in tools like React Router and React Hook Form. 
          </p>
          <br />

          <p>
            I am passionate about continuously learning new languages and
            frameworks. In today's fast-paced tech world, staying updated is
            essential for growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
