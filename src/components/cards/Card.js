import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ path, title, footer, icon = "solicitud" }) => {
  const iconName = `/img/icon-${icon}.png`;
  return (
    <Link to={path} className="link">
      <div className="col card border-light mb-3 dimension">
        <div className="card border-light mb-3 rectangle">
          <img className="icon-card" src={iconName} alt={icon} />
        </div>
        <div className=" text-success title">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-footer bg-transparent">
          <i className="fas fa-clock color-icon"></i>

          <p className="d-inline">{footer}</p>
        </div>
      </div>
    </Link>
  );
};
