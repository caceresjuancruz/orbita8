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
      document.getElementById("myModal").style.display = "block";
      document.getElementById("modalBack").style.display = "block";
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
      className="d-flex animate__animated animate__fadeInDownBig"
      id="formfull"
    >
      <div className="m-2 p-2 w-100 rounded-4" id="form-container">
        <div className="d-flex align-items-center mb-3">
          <h1 className="d-inline-block w-100 text-center btnSeccion fw-bold text-light">
            Contacto
          </h1>
          <NavLink
            className="text-dark d-inline-block ms-auto"
            onClick={() => {
              window.scrollTo(0, 0);
              document
                .getElementById("formfull")
                .classList.remove("animate__fadeInDownBig");
              document
                .getElementById("formfull")
                .classList.add("animate__fadeOutUpBig");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
          >
            <TfiClose className="text-light" size={30} />
          </NavLink>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input
              className="form__input rounded-3 shadow-lg"
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
            />
            <label htmlFor="name" className="form__label">
              Nombre
            </label>
          </div>

          <div className="mb-4">
            <input
              className="form__input rounded-3 shadow-lg"
              type="text"
              name="user_phone"
              placeholder="Telefono"
              required
            />
            <label htmlFor="name" className="form__label">
              Telefono
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="email_id" className="form__label">
              Email
            </label>
            <input
              className="form__input rounded-3 shadow-lg"
              type="email"
              id="email_id"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              className="form__input rounded-3 shadow-lg"
              name="message"
              rows="3"
              placeholder="Mensaje"
              required
            ></textarea>
            <label htmlFor="name" className="form__label">
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
                Enviar <i className="bi bi-send-fill"></i>
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
      <style jsx="true">
        {`
          .form__label {
            font-size: 1rem;
            margin: 0 0 0.5rem 1rem;
            display: none;
            transition: all 0.3s;
            transform: translateY(0rem);
            color: white;
            visibility: hidden;
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

          .form__input:focus .form__label {
            opacity: 1;
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
