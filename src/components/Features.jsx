import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

function Features() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <ul
      className="list-unstyled vstack gap-3 gap-md-3 text-light m-0"
      id="features"
    >
      <div
        className={`row d-flex align-items-center feature user-select-none shadow-lg ${
          isLoading ? "animate__animated animate__fadeInLeft" : ""
        }`}
        role="button"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        <div className="col-2 text-center col-md-1 p-0 position-relative">
          <img
            src={"ajustes.png"}
            className="feature-icon animate__animated animate__rotateIn"
            style={{ filter: "invert(0.975)" }}
            alt="Gear"
          />
        </div>
        <div className="col-10 col-md-11 text-center text-md-start">
          <li className="feature-text">DESARROLLO WEB PERSONALIZADO</li>
        </div>
      </div>

      {/* Modal Desarrollo Web Personalizado Start*/}

      {/* Modal Desarrollo Web Personalizado End*/}

      <div
        className={`row d-flex align-items-center feature user-select-none feature-2 shadow-lg ${
          isLoading ? "animate__animated animate__fadeInLeft" : ""
        }`}
        role="button"
        style={{ animationDuration: "2s" }}
      >
        <div className="col-2 text-center col-md-1 p-0 position-relative">
          <img
            className="feature-icon animate__animated animate__rotateIn"
            src={"internet.png"}
            style={{
              animationDuration: "2s",
              filter: "invert(0.975)",
            }}
            alt="World Wide"
          />
        </div>
        <div className="col-10 col-md-11 text-center text-md-start">
          <li className="feature-text">COMERCIO ELECTRÓNICO</li>
        </div>
      </div>

      {/* Modal COMERCIO ELECTRÓNICO Start*/}

      {/* Modal COMERCIO ELECTRÓNICO End*/}

      <div
        className={`row d-flex align-items-center feature user-select-none feature-2 shadow-lg ${
          isLoading ? "animate__animated animate__fadeInLeft" : ""
        }`}
        role="button"
        style={{ animationDuration: "3s" }}
      >
        <div className="col-2 text-center col-md-1 p-0 position-relative">
          <img
            src={"navegador.png"}
            className="feature-icon animate__animated animate__rotateIn"
            style={{
              animationDuration: "3s",
              filter: "invert(0.975)",
            }}
            alt="Browser"
          />
        </div>
        <div className="col-10 col-md-11 text-center text-md-start">
          <li className="feature-text">DISEÑO RESPONSIVE Y OPTIMIZACIÓN</li>
        </div>
      </div>

      {/* Modal DISEÑO RESPONSIVE Y OPTIMIZACIÓN Start*/}

      {/* Modal DISEÑO RESPONSIVE Y OPTIMIZACIÓN End*/}

      <div
        className={`row d-flex align-items-center p-0 feature user-select-none shadow-lg ${
          isLoading ? "animate__animated animate__fadeInLeft" : ""
        }`}
        role="button"
        style={{ animationDuration: "4s" }}
      >
        <div className="col-2 text-center col-md-1 p-0">
          <img
            src={"lista.png"}
            className="feature-icon animate__animated animate__rotateIn"
            style={{
              animationDuration: "4s",
              filter: "invert(0.975)",
            }}
            alt="List"
          />
        </div>
        <div className="col-10 col-md-11 text-center text-md-start">
          <li className="feature-text">POSICIONAMIENTO EN BUSCADORES</li>
        </div>
      </div>

      {/* Modal POSICIONAMIENTO EN BUSCADORES Start*/}

      {/* Modal POSICIONAMIENTO EN BUSCADORES End*/}

      <IoIosArrowDropupCircle
        className="mx-auto mt-5 border rounded-circle shadow-lg p-0 text-light mainIconUp animate__animated animate__fadeInUpBig d-none"
        size={60}
        onClick={() => window.scrollTo(0, 0)}
        style={{ animationDuration: "2s" }}
      />
      <div className="container my-5 bg-transparent footer-mobile"></div>
      <style jsx="true">
        {`
          .footer-mobile {
            display: block;
          }

          .mainIconUp {
            display: inline;
          }
          .feature {
            transition: all 0.5s;
            border-radius: 100px;
            margin-left: 0.2rem;
            margin-right: 0.2rem;
          }
          .feature:hover {
            background: rgba(0, 0, 0, 0.3);
            transform: translateY(-15px);
          }

          .feature-text {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
          }

          .feature-icon {
            width: 4rem;
            margin-left: 0;
          }

          #features {
            padding-right: 0;
            padding-top: 1rem;
          }

          @media (min-width: 768px) {
            .footer-mobile {
              display: none;
            }

            .mainIconUp {
              display: none;
            }

            .feature-icon {
              width: 6rem;
              margin-top: 0;
            }

            .feature {
              margin-top: 2rem;
              margin-bottom: 2rem;
              margin-left: 0;
              margin-right: 0;
            }

            .feature-2 {
              margin-left: 3rem;
            }

            #features {
              padding-right: 1rem;
              padding-top: 0;
            }

            .feature-text {
              font-size: 1.7rem;
              margin-left: 1rem;
              padding-left: 3rem;
              margin-bottom: 0;
              padding-right: 0;
            }
          }
        `}
      </style>
    </ul>
  );
}

export default Features;
