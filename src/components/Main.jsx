import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Main() {
  return (
    <div className="mobile-main">
      <div
        class="alert alert-success position-absolute m-2 top-0"
        id="alerta"
        role="alert"
        style={{ display: "none" }}
      >
        Gracias por comunicarte con nosotros! nos estaremos contactando contigo
        lo antes posible.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <img
        className="img-fluid img-main animate__animated animate__fadeInDown"
        src="horizontal-blanco-png.png"
        alt="Orbita8"
      />
      <div
        className="animate__animated animate__fadeIn"
        style={{ animationDuration: "5s" }}
      >
        <h2 className="text-light fs-1 m-0 ">Web Design Agency</h2>
        <h5 className="text-light fw-light fs-4 m-0 ">
          Nos dedicamos a plasmar tu idea en la web.
        </h5>
      </div>

      <NavLink to="/form" className="container-one">
        <button
          className="btn btn-lg fw-bold rounded-4 mx-2 btn-main shadow-lg position-relative animate__animated animate__backInUp"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          style={{ overflow: "hidden" }}
        >
          <h3 className="fw-bold fs-1 text-light">Quiero mi sitio</h3>
          <div className="fill-one"></div>
        </button>
      </NavLink>
      <NavLink to="/portfolio">
        <button className="btn bg-white rounded-4 mx-2 btn-main shadow-lg animate__animated animate__backInUp">
          <h3 className="fw-light fs-1">Nuestros trabajos</h3>
        </button>
      </NavLink>
      <IoIosArrowDropdownCircle
        className="mx-auto mt-5 text-light mainIcon animate__animated animate__bounceInUp"
        size={80}
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        style={{ animationDuration: "3s" }}
      />
      <style jsx="true">
        {`
          #root {
            font-family: "Source Sans Pro", sans-serif;
          }

          .btn-main {
            margin-top: 1rem;
            width: 15rem;
            height: 6rem;
          }
          .btn-main:hover {
            color: rgb(125, 125, 200);
          }

          .mobile-main {
            margin-top: 35%;
          }

          .mainIcon {
            display: block;
            -webkit-filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
            filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
          }

          @media (min-width: 768px) {
            .btn-main {
              width: 25rem;
              height: 10rem;
              margin-top: 2rem;
            }

            .mobile-main {
              margin-top: 0;
            }

            .mainIcon {
              display: none;
            }
          }

          .img-main {
            -webkit-filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
            filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
          }

          .fill-one {
            position: absolute;
            background-image: linear-gradient(to right, #e040fb, #00bcd4);
            height: 200rem;
            width: 50rem;
            border-radius: 5px;
            margin: -100rem 0 0 -140px;
            z-index: -1;
            transition: all 0.4s ease;
          }

          .container-one:hover .fill-one {
            -webkit-transform: translateX(100px);
            -moz-transform: translateX(100px);
            transform: translateX(100px);
          }
        `}
      </style>
    </div>
  );
}

export default Main;
