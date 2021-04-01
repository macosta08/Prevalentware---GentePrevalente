import React, { useState } from "react";
import Modal from "react-modal";
import { FilePDF } from "../filePDF/FilePDF";
import "./ModalDownloads.css";

export const ModalDownloads = () => {
  //Estado para guardad (Esta abierto o cerrado)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "533px",
      height: "572px",
    },
  };

  return (
    <div className="modal-styles">
      <button className="btn btn-archivo btn-modal" onClick={openModal}>
        <i className="fas fa-paperclip"></i>Ver archivos adjuntos
      </button>

      <Modal
        appElement={document.getElementById("root")}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="float-right" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </div>
        <br />
        <h2 className="text-center">Documentos Cargados</h2>
        <div className="ml-5 mt-5 mr-5">
          <FilePDF filename={"RUT PrevlalentWare"} />
          <FilePDF filename={"Logo PrevlalentWaree"} />
          <FilePDF filename={"Acta de constitución PrevlalentWare"} />
          <FilePDF filename={"Cámara de Comercio Prevalentware"} />
          <FilePDF filename={"Otro Documento Prevalentware"} />
        </div>
      </Modal>
    </div>
  );
};
