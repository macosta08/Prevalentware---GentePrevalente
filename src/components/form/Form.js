import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import { FilePDF } from "../filePDF/FilePDF";
import { FormButtons } from "../formButtons/FormButtons";
import { ModalDownloads } from "../modal/ModalDownloads";
import { Pagination } from "../pagination/Pagination";
import "./Form.css";
export const Form = () => {
  return (
    <div>
      <Breadcrumb />
      <Pagination topBottom={"pag-top"} />
      <section className="ml-3 mr-3 d-flex justify-content-center mb-3">
        <div className="container-form d-flex flex-column bd-highlight ">
          <div className="w-100 mt-3 container-header">
            <div className="d-flex justify-content-center container-logo">
              <img
                src="/img/logo-empresa.png"
                className="logo-empresa"
                alt="logo empresa"
              />
            </div>
            <div className="container-buttons">
              <FormButtons topBottom={"button-top"} />
            </div>
          </div>

          <form>
            <div className="row-form">
              <div className="input-data">
                <input type="text" />
                <div className="underline"></div>
                <label htmlFor="">Nombre de la Empresa</label>
              </div>
              <div className="input-data">
                <input type="text" />
                <div className="underline"></div>
                <label htmlFor="">Razón Social</label>
              </div>
            </div>
            <div className="row-form">
              <div className="input-data">
                <input type="text" />
                <div className="underline"></div>
                <label htmlFor="">Tipo de identificación</label>
              </div>
              <div className="input-data">
                <input type="text" />
                <div className="underline"></div>
                <label htmlFor="">Identificación</label>
              </div>
            </div>
            <div className="row-form">
              <div className="input-data">
                <input type="text" />
                <div className="underline"></div>

                <label htmlFor=""># de empleados</label>
              </div>
              <div className="input-data submit-btn">
                <ModalDownloads />
              </div>
            </div>
          </form>
          <h5 className="mb-5 contenedor-adjuntos">Documentos Cargados</h5>
          <div className="contenedor-adjuntos">
            <FilePDF filename={"RUT PrevlalentWare"} />
            <FilePDF filename={"Logo PrevlalentWaree"} />
            <FilePDF filename={"Acta de constitución PrevlalentWare"} />
            <FilePDF filename={"Cámara de Comercio Prevalentware"} />
            <FilePDF filename={"Otro Documento Prevalentware"} />
          </div>
        </div>
      </section>
      <section className="container d-flex justify-content-center ">
        <FormButtons topBottom={"button-bottom"} />
      </section>
      <Pagination topBottom={"pag-bottom"} />
    </div>
  );
};
