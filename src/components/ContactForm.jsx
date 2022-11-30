import React, { Fragment, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import successAnimation from "../utils/success-animation.json";

function ContactForm() {
  const [successAnimationStopped, setSuccessAnimationStopped] = useState(true);

  const handleSuccessEmailSend = () => {
    setSuccessAnimationStopped(false);
    setTimeout(() => setSuccessAnimationStopped(true), 1400);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2jglkk",
        "template_rsnrj4i",
        form.current,
        "murfl-Ep5p2hKjHrh"
      )
      .then(
        (result) => {
          handleSuccessEmailSend();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="m-2  p-2 rounded-4" id="form-container">
      <div className="d-flex align-items-center mb-3">
        <h1 className="d-inline-block">Contacto</h1>
        <NavLink to="/" className="text-dark d-inline-block ms-auto">
          <TfiClose className="" size={30} />
        </NavLink>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control-lg w-100"
            name="user_name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control-lg w-100"
            name="user_email"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control-lg w-100"
            name="message"
            rows="3"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`btn btn-lg w-100 ${
            successAnimationStopped ? "btn-primary" : "btn-success"
          }`}
          style={{ height: "5rem" }}
        >
          {successAnimationStopped ? (
            <Fragment>
              Enviar <i class="bi bi-send-fill"></i>
            </Fragment>
          ) : (
            <Lottie
              options={defaultOptions}
              height={80}
              width={80}
              style={{ marginTop: "-0.5rem" }}
            />
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
