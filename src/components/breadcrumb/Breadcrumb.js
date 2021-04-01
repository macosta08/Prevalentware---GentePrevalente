import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  return (
    <div className="ml-5 mt-3 mb-3">
      <Link to="/">Administración</Link> / Aprobación de Empresas
    </div>
  );
};
