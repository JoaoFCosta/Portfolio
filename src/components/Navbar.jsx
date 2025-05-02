import React from "react";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-4 mx-5 z-2 position-relative border-bottom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-1 fw-bolder text-light">
          Portfolio
        </Link>

        {/* Botão de toggle para dispositivos pequenos */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conteúdo colapsável */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a
                href="https://linkedin.com/in/joaorfcosta"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link fs-4 text-light"
              >
                Linkedin
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/JoaoFCosta?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link fs-4 text-light"
              >
                Projetos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
