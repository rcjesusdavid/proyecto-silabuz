import { React, useEffect, useState } from "react";
import CJOBS_API from "../utils/consolejobsAPI";

const OfertaDetail = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`console-jobs/work-offers/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setDatos(res.data);
    });
  }, []);

  return (
    <>
      {/* <!-- ======================= Searchbar Banner ======================== --> */}
      {datos.map((dato, i) => {
        return (
          <div className="bg-light rounded py-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <div className="jbd-01 d-flex align-items-center justify-content-between">
                    <div className="jbd-flex d-flex align-items-center justify-content-start">
                      <div className="jbd-01-thumb">
                        <img
                          src="https://picsum.photos/120/120"
                          className="img-fluid"
                          width="100"
                          alt=""
                        />
                      </div>
                      <div className="jbd-01-caption pl-3">
                        <div className="tbd-title">
                          <h4 className="mb-0 ft-medium fs-md">
                            {dato.title}
                            <img
                              src="assets/img/verify.svg"
                              className="ml-1"
                              width="12"
                              alt=""
                            />
                          </h4>
                        </div>
                        <div className="jbl_location mb-3">
                          <span>
                            <i className="lni lni-map-marker mr-1"></i>Lima,
                            Peru
                          </span>
                          {/* <span className="ml-3">
                            <i className="lni lni-briefcase mr-1"></i>InVision
                          </span> */}
                          <span className="ml-3">
                            <i className="lni lni-money-protection mr-1"></i>
                            {dato.salary} Soles
                          </span>
                        </div>
                        <div className="jbl_info01">
                          <span className="px-2 py-1 ft-medium medium text-light theme-bg rounded mr-2">
                            Full Time
                          </span>
                          {/* <span className="px-2 py-1 ft-medium medium text-light bg-warning rounded mr-2">
                            Urgent
                          </span>
                          <span className="px-2 py-1 ft-medium medium text-light bg-purple rounded">
                            Urgent
                          </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="jbd-01-right text-right">
                      <div className="jbl_button mb-2">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-md rounded theme-bg-light theme-cl fs-sm ft-medium"
                        >
                          Aplicar a esta oferta
                        </a>
                      </div>
                      <div className="jbl_button">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-md rounded bg-white border fs-sm ft-medium"
                        >
                          Ver empresa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <!-- ======================= Searchbar Banner ======================== --> */}

      {/* <!-- ============================ Job Details Start ================================== --> */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="rounded mb-4">
                <div className="jbd-01 pr-3">
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">
                      Descripcion de la oferta
                    </h5>
                    <p>
                      empresa con más de 15 años de trayectoria como consultora
                      de tecnología e innovación digital. Nos encontramos en
                      búsqueda de un Programador Web Frontend.
                    </p>
                  </div>

                  <div className="jbd-details mb-3">
                    <h5>Requisitos:</h5>
                    <div className="position-relative row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Liderar sesiones de Research e Ideación para
                              diseñar prototipos.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Conocimientos en Figma (avanzado), marvel u otras
                              herramientas de prototipado
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Al día con las últimas tendencias y tecnologías de
                              UI / UX.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Experiencia en design thinking, benchmarking,
                              Visual thinking y Storyboard.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Disponibilidad para participar en un proyecto de 4
                              meses.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Diploma o Certificado de un Curso de HTML 5 que
                              acredite como mínimo 24 horas lectivas.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              Experiencia certificada como Diseñador Web UX UI
                              de tres años en proyectos de software,
                              aplicaciones web y/o páginas web o servicios
                              gráficos o multimedia (la experiencia cuenta desde
                              la fecha de obtención del título).
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Habilidades requeridas</h5>
                    <div className="other-details">
                      <div className="details ft-medium">
                        <label className="text-muted">Role</label>
                        <span className="text-dark">
                          Database Architect / Designer
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Industry Type</label>
                        <span className="text-dark">
                          Advertising & Marketing
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Functional Area</label>
                        <span className="text-dark">
                          Engineering - Software
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Employment Type</label>
                        <span className="text-dark">Full Time, Permanent</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Role Category</label>
                        <span className="text-dark">
                          DBA / Data warehousing
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="jbd-details mb-1">
                    <h5 className="ft-medium fs-md">Habilidades clave</h5>
                    <ul className="p-0 skills_tag text-left">
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Studios
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          WordPress
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Javascript
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Design Thinking
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          HTML5
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Design
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Photoshop
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Figma
                        </span>
                      </li>
                      <li>
                        <span className="px-2 py-1 medium skill-bg rounded text-dark">
                          Herramientas UI
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="jbd-02 pt-4 pr-3">
                  <div className="jbd-02-flex d-flex align-items-center justify-content-between">
                    <div className="jbl_button mb-2">
                      <a
                        href="#"
                        className="btn btn-md rounded gray fs-sm ft-medium mr-2"
                      >
                        Guardar esta oferta
                      </a>
                      <a
                        href="#"
                        className="btn btn-md rounded theme-bg text-light fs-sm ft-medium"
                      >
                        Aplicar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Job Details End ================================== --> */}

      {/* <!-- ======================= Related Jobs ======================== --> */}
      <section className="space min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Ofertas Relacionadas</h6>
                <h2 className="ft-bold">Todas las ofertas relacionadas</h2>
              </div>
            </div>
          </div>

          {/* <!-- row --> */}
          <div className="row align-items-center">
            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://picsum.photos/120/120"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-warning text-warning px-2 py-1 rounded">
                    Part Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://picsum.photos/120/120"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-purple text-purple px-2 py-1 rounded">
                    Contract
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://picsum.photos/120/120"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-danger text-danger px-2 py-1 rounded">
                    Enternship
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://picsum.photos/120/120"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
      {/* <!-- ======================= Related Jobs ======================== --> */}
    </>
  );
};

export default OfertaDetail;
