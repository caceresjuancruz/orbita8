import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Portfolio() {
  const works = [
    {
      workName: "Estudio de Danzas Viviana Musso",
      imgUrl: "estudio.png",
      link: "https://estudiodedanzasvivianamusso.com/",
    },
    {
      workName: "Optica Merlo",
      imgUrl: "optica.png",
      link: "https://opticamerlo.com.ar/",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, works.length * 1000);
  });

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
      </div>

      <h2
        className="text-light fw-light animate__animated animate__fadeIn"
        id="trabajosrealizados"
        style={{ animationDuration: "3s" }}
      >
        Trabajos realizados
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-5 works-container">
        {works.map((work, index) => (
          <div className="col" key={index}>
            <div className="wrapper">
              <div
                className={`card border-0 rounded-4 shadow-lg ${
                  isLoading ? "animate__animated animate__fadeInUp" : ""
                }`}
                style={{ animationDuration: `${index + 1}s` }}
                role="button"
                onClick={() => {
                  window.open(work.link, "_blank").focus();
                }}
              >
                <img src={work.imgUrl} alt={work.workName} />
                <div className="info mx-auto mt-5">
                  <h2 className="fw-light mt-4">{work.workName}</h2>
                </div>
              </div>
            </div>

            {/* <div
              class="card cardStyle h-100 rounded-4 border-0 shadow-lg animate__animated animate__fadeInUp"
              role="button"
              style={{ animationDuration: `${index + 1}s` }}
            >
              <img
                src={work.imgUrl}
                class="card-img-top rounded-4"
                alt={work.workName}
              />
              <div className="info">
                <h2>{work.workName}</h2>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <style jsx="true">
        {`
          #features {
            display: none;
          }

          .col {
            padding: 0;
          }

          .wrapper {
            display: flex;
            width: 100%;
            justify-content: space-around;
          }

          .card {
            width: 25rem;
            height: 15rem;
            padding: 1.5rem;
            background: white;
            position: relative;
            display: flex;
            align-items: flex-end;
            transition: 0.4s ease-out;
            box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
          }
          .card:hover {
            transform: translateY(-15px);
          }
          .card:hover:before {
            opacity: 1;
          }
          .card:hover .info {
            opacity: 1;
            transform: translateY(0px);
          }
          .card:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background: rgba(0, 0, 0, 0.6);
            z-index: 2;
            transition: 0.5s;
            opacity: 0;
          }
          .card img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 15px;
          }
          .card .info {
            position: relative;
            z-index: 3;
            color: white;
            opacity: 0;
            transform: translateY(30px);
            transition: 0.5s;
          }
          .card .info h2 {
            margin: 0px;
            font-size: 1.5rem;

            width: 100%;
          }

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
            #features {
              display: flex;
            }

            .col {
              padding: 1rem;
            }

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
