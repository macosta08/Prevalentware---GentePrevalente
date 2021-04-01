import React from "react";
import "./Pagination.css";
export const Pagination = ({ topBottom = "pag-bottom" }) => {
  return (
    <div
      className={`container mt-3 d-flex justify-content-center align-items-center`}
    >
      <i
        className={`fas fa-chevron-circle-left ${topBottom}`}
        style={{ fontSize: 30 }}
      ></i>
      <div className={`ml-2 mr-2 ${topBottom} pag-text`}>
        Empresa 1 de 2 pendiente por aprobación
      </div>
      <i
        className={`fas fa-chevron-circle-right ${topBottom}`}
        style={{ fontSize: 30 }}
      ></i>
    </div>
  );
};
