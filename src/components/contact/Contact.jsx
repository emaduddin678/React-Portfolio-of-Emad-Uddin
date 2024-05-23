import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Contact() {
  const formRef = useRef(null);

  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vse227l",
        "template_hvf5orr",
        formRef.current,
        "o9kFsPb7ZZ-ieSFj_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
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
            <FiMail className="mx-auto" />
            <h4>Email</h4>
            <h5>emaduddin678@gmail.com</h5>
            <a href="mailto:emaduddin678@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="mx-auto" />
            <h4>Messenger</h4>
            <h5>Emad Uddin</h5>
            <a
              href="https://www.messenger.com/t/100015232537978"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="mx-auto" />
            <h4>WhatsApp</h4>
            <h5>+88 01613567054</h5>
            <a href="https://wa.me/+8801613567054" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
          >
            Send Message <BiSend />
          </button>
          {successMessage && (
            <p className="message-feedback">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
