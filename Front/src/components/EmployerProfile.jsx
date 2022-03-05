import React from "react";

const EmployerProfile = () => {
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
                    <i className="lni lni-dashboard mr-2"></i>Inicio | Empresa
                  </a>
                </li>
                <li>
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
                <li className="active">
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
                        Mi Perfil
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
                        Cuenta
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div className="custom-file avater_uploads">
                          <label className="custom-file-label" for="customFile">
                            <img src="assets/img/empresa-1.jfif" alt="" />
                          </label>
                        </div>
                      </div>

                      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Razon social
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="Silabuz.com"
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
                                value="silabuz@correo.com"
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
                                value="Phone"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Categoria de la empresa
                              </label>
                              <select className="form-control rounded">
                                <option>Seleccione Categoria</option>
                                <option>IT & Software</option>
                                <option>Developers</option>
                                <option>Outsourcing</option>
                                <option selected>E-Learning</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Año de Fundacion
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                value="2016"
                              />
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Acerca de la empresa
                              </label>
                              <textarea className="form-control with-light">
                                Silabuz.com es una startup que conecta a
                                estudiantes y profesionales de Latinoamérica de
                                habla hispana con cursos online para aprender o
                                reforzar tus habilidades y recibir la educación
                                de calidad que se requiere para el mundo digital
                                de hoy.
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
                            placeholder="https://www.facebook.com/silabuzcom/"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Instagram
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="https://www.instagram.com/silabuzcom/"
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
                            placeholder="https://www.linkedin.com/company/silabuz.com/"
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
                        Informacion de la empresa
                      </h4>
                    </div>
                  </div>

                  <div className="_dashboard_content_body py-3 px-3">
                    <form className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Pais</label>
                          <select className="custom-select rounded">
                            <option>Australia</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>China</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option selected>Peru</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Ciudad</label>
                          <select className="custom-select rounded">
                            <option>Madhya Pradesh</option>
                            <option selected>Lima</option>
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
                            placeholder="San Isidro, zona empresarial"
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

export default EmployerProfile;
