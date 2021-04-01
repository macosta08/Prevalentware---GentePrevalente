import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css"
export const Breadcrumb = () => {
  return (
    <div className=" bread-text">
      <Link to="/">Administración</Link> / Aprobación de Empresas
    </div>
  );
};
