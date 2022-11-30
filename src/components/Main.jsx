import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <div
        class="alert alert-success position-absolute m-2"
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
        className="img-fluid"
        src="horizontal-blanco-png.png"
        alt="Orbita8"
      />
      <h5 className="text-light">
        Algun texto descriptivo de las tecnologias que trabajamos o algo
        blabalbalbal
      </h5>
      <NavLink to="/form">
        <button
          className="btn btn-lg btn-danger fw-bold rounded-4 mx-2 btn-main shadow"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          <h3 className="fw-bold fs-1">Quiero mi web</h3>
        </button>
      </NavLink>
      <NavLink to="/portfolio">
        <button className="btn btn-outline-primary bg-white fw-bold rounded-4 mx-2 btn-main shadow">
          <h3 className="fw-light fs-1">Nuestros trabajos</h3>
        </button>
      </NavLink>
      <style jsx>
        {`        
          #root{
            font-family: 'Source Sans Pro', sans-serif;
          }

          .btn-main {
            margin-top: 1rem;
          }

          @media (min-width: 768px) {
            .btn-main {
              width: 25rem;
              height: 10rem;
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Main;
