import React from "react";

import Html from "../assets/html5.png";
import Css from "../assets/css3.png";
import Csharp from "../assets/csharp.png";
import DotNet from "../assets/dotnet.png";
import Bootstrap from "../assets/bootstrap.png";
import ReactImg from "../assets/react.png";
import Figma from "../assets/figma.png";

const Experiencia = () => {
  return (
    <div>
      <h2 className="fs-1 fw-bolder text-uppercase mb-5 p-5 text-light">Experiência</h2>
      <section className="container mt-5 z-1">
        <div className="text-light">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
            {/* Exemplo de item */}
            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={Html}
                    alt="HTML"
                    className="htmlImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">HTML</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img src={Css} alt="CSS" className="htmlImg img-fluid mb-2" />
                  <h6 className="mt-2 mb-0 text-light">CSS</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={Csharp}
                    alt="Csharp"
                    className="htmlImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">C#</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={DotNet}
                    alt="DotNet"
                    className="htmlImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">.NET</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={Bootstrap}
                    alt="Bootstrap"
                    className="bootstrapImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">Bootstrap</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={ReactImg}
                    alt="React"
                    className="bootstrapImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">React</h6>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 bg-transparent text-center">
                <div className="card-body d-flex flex-column align-items-center p-3 border rounded shadow-sm bg-dark bg-opacity-25">
                  <img
                    src={Figma}
                    alt="Figma"
                    className="figmaImg img-fluid mb-2"
                  />
                  <h6 className="mt-2 mb-0 text-light">Figma</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiencia;
