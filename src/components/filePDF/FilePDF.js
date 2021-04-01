import React from "react";

export const FilePDF = ({ filename }) => {
  return (
    <div className="ml-5 mr-5 mb-4 d-flex justify-content-between align-items-center">
      <div>{filename}</div>
      <img
        src="/img/pdf-file.png"
        className="d-inline-block align-top"
        alt="logo empresa"
      />
    </div>
  );
};
