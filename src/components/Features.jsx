import React from "react";

import ComputerImg from "../utils/assets/computer.png";
import CardImg from "../utils/assets/card.png";
import ZoomImg from "../utils/assets/zoom.png";
import SettingsImg from "../utils/assets/settings.png";

function Features() {
  return (
    <ul className="list-unstyled vstack gap-3" id="features">
      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="position-absolute top-50 start-0 translate-middle icon">
            <img
              className="animate__animated animate__rotateIn"
              src={ComputerImg}
              style={{ width: "7rem" }}
              alt="Computer"
            />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4 font-feature">
            Desarrollo Web Personalizado
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className=" position-absolute top-50 start-0 translate-middle icon">
            <img
              className="animate__animated animate__rotateIn"
              src={CardImg}
              style={{ width: "7rem" }}
              alt="Card"
            />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4 font-feature">
            Comercio Electrónico
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="position-absolute top-50 start-0 translate-middle icon">
            <img
              className="animate__animated animate__rotateIn"
              src={SettingsImg}
              style={{ width: "7rem" }}
              alt="Settings"
            />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4 font-feature">
            Diseño Responsive y Optimización
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="position-absolute top-50 start-0 translate-middle icon">
            <img
              className="animate__animated animate__rotateIn"
              src={ZoomImg}
              style={{ width: "7rem" }}
              alt="Zoom"
            />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4 font-feature">
            Posicionamiento en Buscadores
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
            background-image: linear-gradient(
              90deg,
              rgba(140, 0, 170, 1) 0%,
              rgba(122, 41, 193, 1) 71%,
              rgba(116, 56, 201, 1) 100%
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
