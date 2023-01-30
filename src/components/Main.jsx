import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Main() {
  return (
    <Fragment>
      <div className="d-flex socials-container" role="button">
        <FaInstagramSquare
          className="social-icon my-2 mx-1 text-light animate__animated animate__fadeIn"
          size={50}
          onClick={() => {
            window
              .open("https://www.instagram.com/orbita8.webdesign/", "_blank")
              .focus();
          }}
        />

        <FaFacebookSquare
          className="social-icon my-2 mx-1 text-light animate__animated animate__fadeIn"
          size={50}
          onClick={() => {
            window
              .open("https://www.facebook.com/orbita8.webdesign/", "_blank")
              .focus();
          }}
        />
      </div>
      <div className="padre d-flex justify-content-center">
        <div className="mobile-main mb-5 mt-0">
          <div
            className="alert alert-success-alt position-absolute m-2 top-0 shadow-lg"
            id="alerta"
            role="alert"
            style={{ display: "none", zIndex: 110 }}
          >
            <strong>Gracias por comunicarte con nosotros!</strong> nos estaremos
            contactando contigo lo antes posible.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          {/*<!-- Modal HTML -->*/}
          <div
            id="myModal"
            className="modal fade show"
            style={{ display: "none" }}
            aria-modal={true}
          >
            <div className="modal-dialog modal-confirm ">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="icon-box">
                    <i className="material-icons">&#xE876;</i>
                  </div>
                  <h4 className="modal-title w-100">
                    <strong>¡Gracias por comunicarte con nosotros!</strong>
                  </h4>
                </div>
                <div className="modal-body">
                  <p className="text-center">
                    Nos estaremos contactando contigo lo antes posible.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-success btn-block"
                    data-dismiss="modal"
                    onClick={() => {
                      document.getElementById("myModal").style.display = "none";
                      document.getElementById("modalBack").style.display =
                        "none";
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            id="modalBack"
            style={{ display: "none" }}
          ></div>
          <img
            className="img-fluid img-main animate__animated animate__fadeInDown"
            style={{ zIndex: 100 }}
            id="main-logo"
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
              className="btn btn-lg fw-bold rounded-4 mx-2 btn-main shadow-lg position-relative animate__animated animate__slideInUp animate__slow"
              onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
              }}
              style={{ overflow: "hidden" }}
            >
              <h3 className="fw-bold display-5 text-light">Quiero mi sitio</h3>
              <div className="fill-one"></div>
            </button>
          </NavLink>
          <NavLink to="/portfolio">
            <button
              className="btn bg-white rounded-4 mx-2 btn-main shadow-lg animate__animated animate__slideInUp animate__slow"
              id="boton"
              style={{ animationDuration: "2.5s" }}
            >
              <h3 className="fw-light display-6">Nuestros trabajos</h3>
            </button>
          </NavLink>

          <IoIosArrowDropdownCircle
            className="mx-auto mt-5 border rounded-circle shadow-lg p-0 text-light mainIcon animate__animated animate__fadeInUpBig d-none"
            size={60}
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            style={{ animationDuration: "2s" }}
          />

          <style jsx="true">
            {`
              .modal-confirm {
                color: #636363;
                max-width: 320px;
                font-size: 14px;
              }
              .modal-confirm .modal-content {
                padding: 20px;
                border-radius: 5px;
                border: none;
              }
              .modal-confirm .modal-header {
                border-bottom: none;
                position: relative;
              }
              .modal-confirm h4 {
                text-align: center;
                font-size: 26px;
                margin: 30px 0 -15px;
              }
              .modal-confirm .form-control,
              .modal-confirm .btn {
                min-height: 40px;
                border-radius: 3px;
              }
              .modal-confirm .close {
                position: absolute;
                top: -5px;
                right: -5px;
              }
              .modal-confirm .modal-footer {
                border: none;
                text-align: center;
                border-radius: 5px;
                font-size: 13px;
              }
              .modal-confirm .icon-box {
                color: #fff;
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                top: -70px;
                width: 95px;
                height: 95px;
                border-radius: 50%;
                z-index: 9;
                background: #82ce34;
                padding: 15px;
                text-align: center;
                box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
              }
              .modal-confirm .icon-box i {
                font-size: 58px;
                position: relative;
                top: 3px;
              }
              .modal-confirm.modal-dialog {
                margin-top: 80px;
              }
              .modal-confirm .btn {
                color: #fff;
                border-radius: 4px;
                background: #82ce34;
                text-decoration: none;
                transition: all 0.4s;
                line-height: normal;
                border: none;
              }
              .modal-confirm .btn:hover,
              .modal-confirm .btn:focus {
                background: #6fb32b;
                outline: none;
              }

              .alert-success-alt {
                border-color: #19b99a;
                background: #20a286;
                color: #fff;
              }

              .social-icon {
                transition: all 0.2s ease-in-out;
              }

              .social-icon:hover {
                -webkit-filter: opacity(0.5);
                filter: opacity(0.5);
                transform: translateY(-2px);
              }

              .socials-container {
                justify-content: center;
              }

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
                .socials-container {
                  justify-content: start;
                }

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
                width: 1000px;
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
      </div>
    </Fragment>
  );
}

export default Main;
