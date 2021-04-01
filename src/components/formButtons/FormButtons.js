import React from "react";
import "./FormButtons.css";
export const FormButtons = ({ topBottom = "button-top" }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <button className={`btn button-styles p-2 ${topBottom}`}>
        <i className="fas fa-check-circle icon-check"></i>Aprobar Empresa
      </button>
      <button className={`btn button-styles p-2 ${topBottom}`}>
        <i className="fas fa-times-circle icon-x"></i>Rechazar Empresa
      </button>
    </div>
  );
};
