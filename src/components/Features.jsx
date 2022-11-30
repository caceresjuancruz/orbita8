import React from "react";
import { FaShoppingCart, FaTools, FaSearch, FaDesktop } from "react-icons/fa";

function Features() {
  return (
    <ul className="list-unstyled vstack gap-3">
      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="bg-dark p-3 rounded-circle position-absolute top-50 start-0 translate-middle">
            <FaDesktop className="text-white" size={60} />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4">Desarrollo Web Personalizado</li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="bg-dark p-3 rounded-circle position-absolute top-50 start-0 translate-middle">
            <FaShoppingCart className="text-white" size={60} />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4">Comercio Electrónico</li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="bg-dark p-3 rounded-circle position-absolute top-50 start-0 translate-middle">
            <FaTools className="text-white" size={60} />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4">
            Diseño Responsive y Optimización
          </li>
        </div>
      </div>

      <div className="row d-flex align-items-center my-5">
        <div className="col-md-1 position-relative">
          <div className="bg-dark p-3 rounded-circle position-absolute top-50 start-0 translate-middle">
            <FaSearch className="text-white" size={60} />
          </div>
        </div>
        <div className="col-md-11">
          <li className="fs-1 fw-bold ms-4">Posicionamiento en Buscadores</li>
        </div>
      </div>
    </ul>
  );
}

export default Features;
