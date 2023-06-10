import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_3pvs0kp",
          "template_hvf5orr",
          form.current,
          "46-Pkyip9VkjT4Uvf"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();   
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail />
            <h4>Email</h4>
            <h5>emaduddin678@gmail.com</h5>
            <a href="mailto:emaduddin678@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Emad Uddin</h5>
            <a href="https://m.me/emad.uddin" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+88 01613567054</h5>
            <a href="https://wa.me/+8801613567054" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
          >
            Send Message <BiSend />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
