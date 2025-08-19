import React from "react";

const Projects = () => {
  const projetos = [
    {
      titulo: "Casa Automática",
      descricao:
        "Projeto de automação residencial com controle de dispositivos via smartphone.",
      tecnologias: ["React + Vite, ESP32, C++"],
      imagem: "/src/assets/casa.jpg",
      github: "https://github.com/ThiagoM22/casaAutomaticasenai",
      link: "https://casa-automatica.vercel.app/",
    },
    {
      titulo: "DevFlix",
      descricao:
        "Plataforma de streaming de vídeos com funcionalidades de busca e categorias.",
      tecnologias: ["React + Vite, API"],
      imagem: "/src/assets/baixados.png",
      github: "https://github.com/JoaoFCosta/React/tree/main/04-devflix",
      link: "https://devflix-sigma-one.vercel.app/",
    },
  ];

  return (
    <div>
      <h2 className="text-start mb-5 fw-bolder text-light fs-1 text-uppercase p-5">
        Meus projetos
      </h2>
      <section className="my-5" id="projetos">
        <div className="row align-items-center text-light">
          <div className="cardBg p-5 row mx-4">
            {projetos.map((projeto, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm border-0">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="h-100 object-fit-cover"
                  />
                </div>
                <div className="cardBody my-3">
                  <span className="fs-3 fw-bold">{projeto.titulo}</span>
                  <br />
                  <span className="fs-5">{projeto.descricao}</span>
                  <br />
                  <span className="fs-5">{projeto.tecnologias}</span>
                  <hr />
                </div>
                <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="me-4">
                  <button className="btn text-light">Github</button>
                </a>
                <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn text-light">
                        Projeto
                    </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
