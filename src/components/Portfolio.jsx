import React from "react";
import { NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

function Portfolio() {
  return (
    <div className="">
      <div className="d-flex o8icon-container">
        <NavLink to="/">
          <img
            src="perfil-png.png"
            alt="Orbita8"
            className="img o8icon float-start logo-shadow animate__animated animate__backInLeft"
          />
        </NavLink>
        {/* <NavLink to="/" className="text-dark d-inline-block ms-auto m-2">
          <TfiClose className="text-light" size={30} />
        </NavLink> */}
      </div>

      <h2
        className="text-light fw-light animate__animated animate__fadeIn"
        style={{ animationDuration: "3s" }}
      >
        Trabajos realizados
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-5 works-container">
        <div class="col">
          <div
            class="card h-100 rounded-4 border-0 shadow-lg animate__animated animate__fadeInUp"
            role="button"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top rounded-4"
              alt="Hollywood Sign on The Hill"
            />
          </div>
        </div>
        <div class="col">
          <div
            class="card h-100 rounded-4 border-0 shadow-lg animate__animated animate__fadeInUp"
            role="button"
            style={{ animationDuration: "2s" }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              class="card-img-top rounded-4"
              alt="Palm Springs Road"
            />
          </div>
        </div>
        <div class="col">
          <div
            class="card h-100 rounded-4 border-0 shadow-lg animate__animated animate__fadeInUp"
            role="button"
            style={{ animationDuration: "3s" }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              class="card-img-top rounded-4"
              alt="Los Angeles Skyscrapers"
            />
          </div>
        </div>
        <div class="col">
          <div
            class="card h-100 rounded-4 border-0 shadow-lg animate__animated animate__fadeInUp"
            role="button"
            style={{ animationDuration: "4s" }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              class="card-img-top rounded-4"
              alt="Skyscrapers"
            />
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          .logo-shadow {
            -webkit-filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
            filter: drop-shadow(0 1rem 3rem rgba(#000, 0.175));
          }

          .o8icon-container {
            justify-content: center;
          }

          .o8icon {
            width: 3rem;
            margin: 1rem 0 1rem 0;
          }

          .works-container {
            margin: 0 1rem 0 1rem;
          }

          @media (min-width: 768px) {
            .o8icon-container {
              justify-content: start;
            }

            .o8icon {
              width: 5rem;
              margin: 1rem 0 0 1rem;
            }

            .works-container {
              margin: 0 10rem 0 10rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Portfolio;
