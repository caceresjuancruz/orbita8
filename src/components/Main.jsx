import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <img
        className="img-fluid"
        src="horizontal-blanco-png.png"
        alt="Orbita8"
      />
      <h5 className="text-light">
        Algun texto descriptivo de las tecnologias que trabajamos o algo
        blabalbalbal
      </h5>
      <NavLink
        className="btn btn-lg btn-danger fw-bold rounded-4 mt-5 mx-2"
        style={{ width: "25rem", height: "10rem" }}
        to="/form"
      >
        <h3 className="fw-bold fs-1">Quiero mi web</h3>
      </NavLink>
      <NavLink
        className="btn btn-lg btn-light fw-bold rounded-4 mt-5 mx-2"
        style={{ width: "25rem", height: "10rem" }}
        to="/portfolio"
      >
        <h3 className="fw-light fs-1">Nuestros trabajos</h3>
      </NavLink>
    </div>
  );
}

export default Main;
