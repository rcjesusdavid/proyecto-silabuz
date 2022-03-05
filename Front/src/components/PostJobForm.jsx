import React from "react";

const PostJobForm = () => {
  return (
    <>
      {/* <!-- ======================= dashboard Detail ======================== --> */}

      <div className="dashboard-wrap bg-light">
        <a
          className="mobNavigation"
          data-toggle="collapse"
          href="#MobNav"
          role="button"
          aria-expanded="false"
          aria-controls="MobNav"
        >
          <i className="fas fa-bars mr-2"></i>Area de trabajo
        </a>
        <div className="collapse" id="MobNav">
          <div className="dashboard-nav">
            <div className="dashboard-inner">
              <ul data-submenu-title="Main Navigation">
                <li>
                  <a href="employer-dashboard.html">
                    <i className="lni lni-dashboard mr-2"></i>Inicio - Empresa
                  </a>
                </li>
                <li className="active">
                  <a href="dashboard-post-job.html">
                    <i className="lni lni-files mr-2"></i>Publicar una Oferta
                  </a>
                </li>
                <li>
                  <a href="dashboard-manage-jobs.html">
                    <i className="lni lni-add-files mr-2"></i>Gestionar Ofertas
                  </a>
                </li>
              </ul>
              <ul data-submenu-title="Mi Cuenta">
                <li>
                  <a href="dashboard-my-profile-employer.html">
                    <i className="lni lni-user mr-2"></i>Mi Perfil
                  </a>
                </li>
                <li>
                  <a href="dashboard-change-password.html">
                    <i className="lni lni-lock-alt mr-2"></i>Cambiar contraseña
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="lni lni-power-switch mr-2"></i>Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-tlbar d-block mb-5">
            <div className="row">
              <div className="colxl-12 col-lg-12 col-md-12">
                <h1 className="ft-medium">Hola, Silabuz.com</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted">
                      <a href="#">Inicio - Empresa</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#" className="theme-cl">
                        Publicar una Oferta
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="_dashboard_content bg-white rounded mb-4">
                  <div className="_dashboard_content_header br-bottom py-3 px-3">
                    <div className="_dashboard__header_flex">
                      <h4 className="mb-0 ft-medium fs-md">
                        <i className="fa fa-file mr-1 theme-cl fs-sm"></i>
                        Publicar Oferta
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Titulo
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="Titulo de la oferta"
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Descripcion de la oferta
                              </label>
                              <textarea
                                className="form-control rounded"
                                placeholder="Descripcion de la oferta laboral"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Tipo de Jornada
                              </label>
                              <select className="form-control rounded">
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Internship</option>
                                <option>Contract</option>
                                <option>Freelancing</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Nivel requerido
                              </label>
                              <select className="form-control rounded">
                                <option>Trainee</option>
                                <option>Junior</option>
                                <option>Senior</option>
                                <option>Team leader</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Area
                              </label>
                              <select className="form-control rounded">
                                <option>Web Designing</option>
                                <option>JAVA Advance</option>
                                <option>PHP Developer</option>
                                <option>IOS Developer</option>
                                <option>App Developer</option>
                                <option>Fashion Designing</option>
                                <option>Bank Services</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Salario
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0000.0 Soles"
                              />
                            </div>
                          </div>

                          {/* <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">Pais</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">Ciudad</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div> */}

                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Direccion de sede
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Jr. lima metropolitana, Peru"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-md ft-medium text-light rounded theme-bg"
                              >
                                Publicar Oferta
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======================= dashboard Detail End ======================== --> */}
    </>
  );
};

export default PostJobForm;
