import React from "react";
import { NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

function Portfolio() {
  return (
    <div className="">
      <div className="d-flex ">
        <NavLink to="/">
          <img
            src="perfil-png.png"
            alt="Orbita8"
            className="img float-start mt-2"
            style={{ width: "5rem" }}
          />
        </NavLink>
        <NavLink to="/" className="text-dark d-inline-block ms-auto mt-2">
          <TfiClose className="text-light" size={30} />
        </NavLink>
      </div>

      <h2 className="text-light fw-light">Trabajos realizados</h2>
      <div class="row row-cols-1 row-cols-md-3 g-5 m-5">
        <div class="col">
          <div class="card h-100 rounded-4 border-0 shadow">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top rounded-4"
              alt="Hollywood Sign on The Hill"
            />
          </div>
        </div>
        <div class="col">
          <div class="card h-100 rounded-4 border-0 shadow">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              class="card-img-top rounded-4"
              alt="Palm Springs Road"
            />
          </div>
        </div>
        <div class="col">
          <div class="card h-100 rounded-4 border-0 shadow">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              class="card-img-top rounded-4"
              alt="Los Angeles Skyscrapers"
            />
          </div>
        </div>
        <div class="col">
          <div class="card h-100 rounded-4 border-0 shadow">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              class="card-img-top rounded-4"
              alt="Skyscrapers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
