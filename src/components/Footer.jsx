import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-transparent text-light py-4 mt-5 border-top">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Nome/Logo */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">JoãoFCosta</h5>
          </div>

          {/* Redes sociais */}
          <div className="col-md-4 text-center text-md-end">
            <a
              href="https://github.com/joaofcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none me-3"
            >
              <i className="bi bi-github fs-2"></i>
            </a>
            <a
              href="https://linkedin.com/in/joaorfcosta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none"
            >
              <i className="bi bi-linkedin fs-2"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
