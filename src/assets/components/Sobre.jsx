import React from "react";

const Sobre = () => {
  return (
    <section
      className="position-relative rounded-top-3 p-5 mt-5 z-1 mx-2"
      id="about"
    >
      <h2 className="text-light fs-1 fw-bold text-uppercase mb-5">Sobre mim</h2>

      <div className="row align-items-center">
        {/* Imagem */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img
            src="https://placehold.co/400x400"
            alt="Foto de perfil"
            className="img-fluid rounded-circle"
          />
        </div>

        {/* Lista de Itens */}
        <div className="col-12 col-md-7">
          <ul className="text-light d-flex flex-column gap-4 p-0">
            <li className="aboutItem d-flex flex-column flex-md-row align-items-start gap-3 rounded-4 p-4">
              <div>
                <h3 className="fs-2 fw-bold">Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </li>

            <li className="aboutItem d-flex flex-column flex-md-row align-items-start gap-3 rounded-4 p-4">
              <div>
                <h3 className="fs-2 fw-bold">Backend Developer</h3>
                <p>
                  I have experience developing fast and optimized back-end
                  systems and APIs.
                </p>
              </div>
            </li>

            <li className="aboutItem d-flex flex-column flex-md-row align-items-start gap-3 rounded-4 p-4">
              <div>
                <h3 className="fs-2 fw-bold">UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
