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
        className="img-fluid img-main"
        src="horizontal-blanco-png.png"
        alt="Orbita8"
      />
      <h2 className="text-light fs-1 m-0">Web Design Agency</h2>
      <h5 className="text-light fw-light fs-4 m-0">
        Nos dedicamos a plasmar tu idea en la web.
      </h5>
      <NavLink to="/form">
        <button
          className="btn btn-lg btnPrincipal fw-bold rounded-4 mx-2 btn-main shadow-lg"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          <h3 className="fw-bold fs-1 text-light">Quiero mi sitio</h3>
        </button>
      </NavLink>
      <NavLink to="/portfolio">
        <button className="btn bg-white rounded-4 mx-2 btn-main shadow-lg">
          <h3 className="fw-light fs-1">Nuestros trabajos</h3>
        </button>
      </NavLink>
      <IoIosArrowDropdownCircle
        className="mx-auto mt-5 text-light mainIcon"
        size={80}
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
      />
      <style jsx="true">
        {`
          #root {
            font-family: "Source Sans Pro", sans-serif;
          }

          .btn-main {
            margin-top: 1rem;
          }
          .btn-main:hover {
            color: rgb(125, 125, 200);
          }

          .mobile-main {
            margin-top: 40%;
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

          .btnPrincipal {
            background: rgb(140, 0, 170);
            background: -moz-linear-gradient(
              90deg,
              rgba(140, 0, 170, 1) 0%,
              rgba(122, 41, 193, 1) 71%,
              rgba(116, 56, 201, 1) 100%
            );
            background: -webkit-linear-gradient(
              90deg,
              rgba(140, 0, 170, 1) 0%,
              rgba(122, 41, 193, 1) 71%,
              rgba(116, 56, 201, 1) 100%
            );
            background: linear-gradient(
              90deg,
              rgba(140, 0, 170, 1) 0%,
              rgba(122, 41, 193, 1) 71%,
              rgba(116, 56, 201, 1) 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8c00aa",endColorstr="#7438c9",GradientType=1);
          }

          .btnPrincipal:hover {
          }
        `}
      </style>
    </div>
  );
}

export default Main;
