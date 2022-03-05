import React from "react";

const CadidateApplied = () => {
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
                <li>
                  <a href="candidate-dashbaord.html">
                    <i className="lni lni-dashboard mr-2"></i>Inicio | Candidato
                  </a>
                </li>

                <li className="active">
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
                        Ofertas aplicadas
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="cl-justify">
                  <div className="cl-justify-first">
                    <p className="m-0 p-0 ft-sm">
                      Has aplicado a
                      <span className="text-dark ft-medium">26</span> ofertas
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="mb-4 tbl-lg rounded overflow-hidden">
                  <div className="table-responsive bg-white">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Titulo de la Oferta</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Fecha de aplicacion</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Fresher UI/UX Designer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 theme-cl">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Full Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>10 Sep 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Advance Magento Developer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 text-warning">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Part Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>18 Sep 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Senior IOS App Developer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 theme-cl">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Full Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>07 Sep 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Senior Product Designer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 text-warning">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Part Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>21 Sep 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Basic WordPress Developer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 theme-cl">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Full Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>10 Oct 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cats-box rounded bg-white d-flex align-items-center">
                              <div className="text-center">
                                <img
                                  src="https://via.placeholder.com/120x120"
                                  className="img-fluid"
                                  width="55"
                                  alt=""
                                />
                              </div>
                              <div className="cats-box-caption px-2">
                                <h4 className="fs-md mb-0 ft-medium">
                                  Technical Content Writer
                                </h4>
                                <div className="d-block mb-2 position-relative">
                                  <span className="text-muted medium">
                                    <i className="lni lni-map-marker mr-1"></i>
                                    Lima, Peru
                                  </span>
                                  <span className="muted medium ml-2 theme-cl">
                                    <i className="lni lni-briefcase mr-1"></i>
                                    Fulltime
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-info">Activa</span>
                          </td>
                          <td>15 Oct 2021</td>
                          <td>
                            <div className="dash-action">
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                              >
                                <i className="lni lni-eye"></i>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                              >
                                <i className="lni lni-trash-can"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="fas fa-arrow-circle-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      10
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="fas fa-arrow-circle-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======================= dashboard Detail End ======================== --> */}
    </>
  );
};

export default CadidateApplied;
