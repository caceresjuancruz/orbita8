import React from "react";

function Features() {
  return (
    <ul className="list-unstyled vstack gap-3 text-light m-0" id="features">
      <div className="row d-flex align-items-center my-4">
        <div className="col-md-1 position-relative">
          <img
            src={"ajustes.png"}
            className="animate__animated animate__rotateIn"
            style={{ width: "6rem", filter: "invert(0.975)"}}
            alt="Computer"
          />
        </div>
        <div className="col-md-11">
          <li className="fs-3 ms-4 ps-5">
            DESARROLLO WEB PERSONALIZADO
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center ms-5 my-4">
        <div className="col-md-1 position-relative">
          <img
            className="animate__animated animate__rotateIn"
            src={"internet.png"}
            style={{ width: "6rem", animationDuration: "2s", filter: "invert(0.975)"}}
            alt="Card"
          />
        </div>
        <div className="col-md-11">
          <li className="fs-3 ms-4 ps-5">
            COMERCIO ELECTRÓNICO
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-4 ms-5">
        <div className="col-md-1 position-relative">
          <img
            src={"navegador.png"}
            className="animate__animated animate__rotateIn"
            style={{ width: "6rem", animationDuration: "3s", filter: "invert(0.975)"}}
            alt="Settings"
          />
        </div>
        <div className="col-md-11">
          <li className="fs-3 ms-4 ps-5">
            DISEÑO RESPONSIVE Y OPTIMIZACIÓN
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-4 p-0" style={{background:"rgba(0,0,0,0.3)",borderRadius:"100px"}}>
        <div className="col-md-1 p-0">
          <img
            src={"lista.png"}
            className="animate__animated animate__rotateIn"
            style={{ width: "6rem", animationDuration: "4s", filter: "invert(0.975)"}}
            alt="Zoom"
          />
        </div>
        <div className="col-md-11">
          <li className="fs-3 ms-4 ps-5">
            POSICIONAMIENTO EN BUSCADORES
          </li>
        </div>
      </div>
      <style jsx="true">
        {`
          .icon {
            display: none;
          }

          @media (min-width: 768px) {
            .icon {
              display: inline;
            }
          }

          .font-feature {
            background: rgb(63,94,251);
            background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
    </ul>
  );
}

export default Features;
