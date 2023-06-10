import React from "react";
import "./Education.css";
import mcuc from "../../assets/mcuc.jpg"
import fbic from "../../assets/fbic.jpg"
import mghs from "../../assets/Mohammadpur_Government_High_School_Logo.jpeg"


const Education = () => {
  return (
    <section id="education" className="education">
      {" "}
      <h5>My Academic Journey</h5>
      <h2>Education</h2>
      <div className="education-item">
        <img src={mcuc} alt="University Logo" />
        <div className="education-details">
          <h3>B.Sc. in Computer Science and Engineering</h3>
          <p className="university">Mohammadpur Kendriya College</p>
          <p className="duration">2019 - 2025</p>
        </div>
      </div>
      <div className="education-item">
        <img src={fbic} alt="College Logo" />
        <div className="education-details">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p className="institution">Firoza Bashar Ideal College (FBIC)</p>
          <p className="duration">2017 - 2019</p>
        </div>
      </div>
      <div className="education-item">
        <img src={mghs} alt="School Logo" />
        <div className="education-details">
          <h3>Secondary School Certificate (SSC)</h3>
          <p className="institution">Mohammadpur Govt. High School (MGHS)</p>
          <p className="duration">2015 - 2017</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
