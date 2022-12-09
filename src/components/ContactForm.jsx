import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import successAnimation from "../utils/success-animation.json";

function ContactForm() {
  const navigate = useNavigate();

  const [successAnimationStopped, setSuccessAnimationStopped] = useState(true);

  const handleSuccessEmailSend = () => {
    setSuccessAnimationStopped(false);
    setTimeout(() => {
      setSuccessAnimationStopped(true);
      navigate("/");
      document.getElementById("alerta").style.display = "inline";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  const defaultOptions = {
    loop: false,
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
    <div
      className="d-flex  animate__animated animate__bounceInDown"
      style={{ marginTop: "5rem" }}
    >
      <div className="m-2 p-2 w-100 rounded-4" id="form-container">
        <div className="d-flex align-items-center mb-3">
          <h1 className="d-inline-block w-100 text-center btnSeccion fw-bold text-light">
            Contacto
          </h1>
          <NavLink
            to="/"
            className="text-dark d-inline-block ms-auto"
            onClick={() => window.scrollTo(0, 0)}
          >
            <TfiClose className="text-light" size={30} />
          </NavLink>
        </div>

        <form ref={form} onSubmit={sendEmail}>

          <div className="mb-3">
            <input
              class="form__input rounded-3 shadow-lg"
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
            />
            <label for="name" class="form__label">
              Nombre
            </label>
          </div>

          <div className="mb-3">
            <input
              class="form__input rounded-3 shadow-lg"
              type="text"
              name="user_phone"
              placeholder="Telefono"
              required
            />
            <label for="name" class="form__label">
              Telefono
            </label>
          </div>

          <div className="mb-3">
            <label for="email_id" class="form__label">
              Email
            </label>
            <input
              class="form__input rounded-3 shadow-lg"
              type="email"
              id="email_id"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              class="form__input rounded-3 shadow-lg"
              name="message"
              rows="3"
              placeholder="Mensaje"
              required
            ></textarea>
            <label for="name" class="form__label">
              Mensaje
            </label>
          </div>

          
          <button
            type="submit"
            className={`btn btn-lg rounded-3 shadow-lg w-100 ${
              successAnimationStopped ? "btn-send" : "btn-success"
            }`}
            style={{ height: "5rem" }}
          >
            {successAnimationStopped ? (
              <div className="text-light fs-4 fw-bold">
                Enviar <i class="bi bi-send-fill"></i>
              </div>
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
      <style jsx>
        {`
          .form__label {
            font-size: 1rem;
            margin: 0 0 0.5rem 1rem;
            display: block;
            transition: all 0.3s;
            transform: translateY(0rem);
            color: white;
          }

          .form__input {
            color: rgba(0, 0, 0, 0.9);
            font-size: 1.2rem;
            margin: 0 auto;
            padding: 0.8rem 2rem;
            border-radius: 0.2rem;
            background-color: rgb(240, 240, 240);
            border: none;
            width: 100%;
            display: block;
            border-bottom: 0.14rem solid rgb(125, 125, 200);
            transition: all 0.3s;
          }

          .form__input:placeholder-shown + .form__label {
            opacity: 0;
            visibility: hidden;
            -webkit-transform: translateY(+4rem);
            transform: translateY(+4rem);
          }

          textarea:focus,
          input:focus {
            outline: none;
          }

          .btnSeccion {
            color: rgba(0, 0, 0, 0.8);
          }

          .btn-send {
            background-color: rgb(125, 125, 200);
          }
          .btn-send:hover {
            background-color: rgb(100, 100, 200);
          }
        `}
      </style>
    </div>
  );
}

export default ContactForm;
