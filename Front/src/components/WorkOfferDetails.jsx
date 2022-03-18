import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CJOBS_API from "../utils/consolejobsAPI";

const WorkOfferDetails = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`job/${id}`).then((res) => {
      console.log(res);
      setOffer(res.data);
    });
  }, []);

  return (
    <>
      {/* <!-- ======================= Searchbar Banner ======================== --> */}
      <div className="bg-light rounded py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="jbd-01 d-flex align-items-center justify-content-between">
                <div className="jbd-flex d-flex align-items-center justify-content-start">
                  <div className="jbd-01-thumb">
                    <img
                      src="../assets/img/job-find.jpg"
                      className="img-fluid"
                      width="100"
                      alt=""
                    />
                  </div>
                  <div className="jbd-01-caption pl-3">
                    <div className="tbd-title">
                      <h4 className="mb-0 ft-medium fs-md">
                        {offer.title}
                        <img
                          src="assets/img/verify.svg"
                          className="ml-1"
                          width="12"
                          alt=""
                        />
                      </h4>
                    </div>

                    <div className="jbl_location mb-3"></div>
                    <div className="jbl_info01">
                      <span className="px-2 py-1 ft-medium medium text-light theme-bg rounded mr-2">
                        Remoto
                      </span>
                    </div>
                  </div>
                </div>
                <div className="jbd-01-right text-right">
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
      {/* <!-- ======================= Searchbar Banner ======================== --> */}
      {/* <!-- ============================ Work Offer Details Start ================================== --> */}
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
                    <p>{offer.description}</p>
                  </div>

                  <div className="jbd-details mb-3">
                    <h5>Oportunidades de crecimiento destacadas:</h5>
                    <div className="position-relative row">
                      <div className="col-lg-12 col-md-12 col-12">
                        {/* Requerimientos SINGLE */}
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              {offer.benefit}
                            </h6>
                          </div>
                        </div>
                        {/* FIN Requerimientos SINGLE */}
                      </div>
                    </div>
                  </div>

                  <div className="jbd-details mb-3">
                    <h5>Requerimientos de la oferta:</h5>
                    <div className="position-relative row">
                      <div className="col-lg-12 col-md-12 col-12">
                        {/* Requerimientos SINGLE */}
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small"></i>
                            </div>
                            <h6 className="mb-0 ml-3 text-muted fs-sm">
                              {offer.requirements}
                            </h6>
                          </div>
                        </div>
                        {/* FIN Requerimientos SINGLE */}
                      </div>
                    </div>
                  </div>

                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Detalles de la Oferta</h5>
                    <div className="other-details">
                      <div className="details ft-medium">
                        <label className="text-muted">Sector Empresarial</label>
                        <span className="text-dark">Telecomunicaciones</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Area de trabajo</label>
                        <span className="text-dark">Development</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Rol:</label>
                        <span className="text-dark">Java Developer</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Jornada laboral</label>
                        <span className="text-dark">Full Time</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Modalidad</label>
                        <span className="text-dark">Remoto</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jbd-02 pt-4 pr-3">
                  <div className="jbd-02-flex d-flex align-items-center justify-content-between">
                    <div className="jbl_button mb-2">
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
      {/* <!-- ============================ Work Offer Details End ================================== --> */}
    </>
  );
};

export default WorkOfferDetails;
