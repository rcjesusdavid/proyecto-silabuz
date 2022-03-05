import React from "react";

const CandidateProfile = () => {
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
              <ul data-submenu-title="Area de trabajo">
                <li className="active">
                  <a href="candidate-dashbaord.html">
                    <i className="lni lni-dashboard mr-2"></i>Inicio | Candidato
                  </a>
                </li>

                <li>
                  <a href="dashboard-applied-jobs.html">
                    <i className="lni lni-briefcase mr-2"></i>Ofertas aplicadas
                  </a>
                </li>

                <li>
                  <a href="dashboard-saved-jobs.html">
                    <i className="lni lni-bookmark mr-2"></i>Ofertas guardadas
                  </a>
                </li>
              </ul>
              <ul data-submenu-title="Mi Cuenta">
                <li>
                  <a href="dashboard-my-profile.html">
                    <i className="lni lni-user mr-2"></i>Mi Perfil
                  </a>
                </li>
                <li>
                  <a href="dashboard-change-password.html">
                    <i className="lni lni-lock-alt mr-2"></i>Cambiar contraseña
                  </a>
                </li>

                <li>
                  <a href="login.html">
                    <i className="lni lni-power-switch mr-2"></i>Cerrar sesion
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
                <h1 className="ft-medium">Hello, Jesus D. Rodriguez</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted">
                      <a href="#">Inicio - Candidato</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#" className="theme-cl">
                        Mi perfil
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
                        <i className="fa fa-user mr-1 theme-cl fs-sm"></i>Mi
                        cuenta
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div className="custom-file avater_uploads">
                          <label className="custom-file-label" for="customFile">
                            <img
                              src="assets/img/perfil.jpeg"
                              alt=""
                              width="100%"
                              height="100%"
                              className="rounded"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Nombres y Apellidos
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="Jesus D. Rodriguez"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Ocupacion
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="Frontend Developer"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Telefono
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="888-777-550"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Correo electronico
                              </label>
                              <input
                                type="email"
                                className="form-control rounded"
                                value="jss@correo.com"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Area de trabajo
                              </label>
                              <select className="custom-select rounded">
                                <option>Seleccione Area de trabajo</option>
                                <option>IT & Software</option>
                                <option>Development</option>
                                <option>Networks</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Experiencia
                              </label>
                              <select className="custom-select rounded">
                                <option>Selecicone experiencia</option>
                                <option>Principiante</option>
                                <option>01 años</option>
                                <option>02 años</option>
                                <option>03 años</option>
                                <option>04 años</option>
                                <option>05 años</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Educacion
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="Bachiller"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Idiomas
                              </label>
                              <input
                                type="email"
                                className="form-control rounded"
                                value="Español nativo, Ingles intermedio"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                About Info
                              </label>
                              <textarea className="form-control with-light">
                                Apasionado con el mundo de la tecnología,
                                energético y perseverante. Abierto a nuevas
                                experiencias educativas y profesionales que
                                rompan lo rutinario sin desviarnos del objetivo.
                              </textarea>
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-md ft-medium text-light rounded theme-bg"
                              >
                                Guardar cambios
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

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="_dashboard_content bg-white rounded mb-4">
                  <div className="_dashboard_content_header br-bottom py-3 px-3">
                    <div className="_dashboard__header_flex">
                      <h4 className="mb-0 ft-medium fs-md">
                        <i className="ti-facebook mr-1 theme-cl fs-sm"></i>Redes
                        Sociales
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Facebook
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="https://www.facebook.com/"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Twitter</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="https://www.twitter.com/"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            LinkedIn
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="https://www.linkedin.com/"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Github</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="jss@github"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                          >
                            Guardar cambios
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="_dashboard_content bg-white rounded mb-4">
                  <div className="_dashboard_content_header br-bottom py-3 px-3">
                    <div className="_dashboard__header_flex">
                      <h4 className="mb-0 ft-medium fs-md">
                        <i className="fas fa-lock mr-1 theme-cl fs-sm"></i>
                        Informacion de Contacto
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Country</label>
                          <select className="form-control rounded">
                            <option>Peru</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>China</option>
                            <option>India</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Ciudad</label>
                          <select className="form-control rounded">
                            <option>Lima</option>
                            <option>Punjab</option>
                            <option>Uttar Pradesh</option>
                            <option>Arudachal</option>
                            <option>Nepal</option>
                            <option>Afganistan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Direccion
                          </label>
                          <input
                            type="password"
                            className="form-control rounded"
                            placeholder="Calle de las alegrias, surquillo lima"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                          >
                            Guardar cambios
                          </button>
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

export default CandidateProfile;
