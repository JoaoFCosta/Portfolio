import React from "react";
import FotoCapa from "../assets/capasite.png"

const Hero = () => {
  return (
    <section className="container mt-5 z-1">
      <div className="row align-items-center text-light">
        {/* Texto */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 className="fw-bolder mb-4">Olá, eu sou o João!</h1>
          <p className="fs-5 mb-4">
            Sou um desenvolvedor Full-stack, atualmente cursando Desenvolvimento de Sistemas no SENAI.
          </p>
          <a
            href="mailto:joaofiamenguicosta@gmail.com"
            className="btn text-light fs-5 border "
          >
            Entre em Contato
          </a>
        </div>

        {/* Imagem */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={FotoCapa}
            className="heroImg img-fluid rounded-pill"
            alt="Foto de João"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
