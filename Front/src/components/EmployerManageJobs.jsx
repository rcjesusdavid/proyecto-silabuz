import React from "react";

const EmployerManageJobs = () => {
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
                <li className="active">
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
                        Gestionar Ofertas
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
                <div className="mb-4 tbl-lg rounded overflow-hidden">
                  <div className="table-responsive bg-white">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Titulo</th>
                          <th scope="col">Fecha de publicacion</th>
                          <th scope="col">Fecha de expiracion</th>
                          <th scope="col">Aplicaciones</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                Senior Web Developer
                              </h4>
                            </div>
                          </td>
                          <td>10 Sep 2021</td>
                          <td>12 Nov 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="gray rounded px-3 py-2 ft-medium"
                            >
                              0
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                Experienced UI/UX Product Designer
                              </h4>
                            </div>
                          </td>

                          <td>18 Sep 2021</td>
                          <td>12 Dic 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="theme-bg text-light rounded px-3 py-2 ft-medium"
                            >
                              04
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                Web developer - Front-End & PHP developer
                              </h4>
                            </div>
                          </td>

                          <td>07 Sep 2021</td>
                          <td>20 Nov 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="theme-bg text-light rounded px-3 py-2 ft-medium"
                            >
                              08
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                WordPress Developer & Database Management System
                              </h4>
                            </div>
                          </td>

                          <td>21 Sep 2021</td>
                          <td>20 Dic 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="theme-bg text-light rounded px-3 py-2 ft-medium"
                            >
                              12
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                Senior Web Developer
                              </h4>
                            </div>
                          </td>

                          <td>10 Oct 2021</td>
                          <td>12 Ene 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="gray rounded px-3 py-2 ft-medium"
                            >
                              0
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
                            <div className="dash-title">
                              <h4 className="mb-0 ft-medium fs-sm">
                                Experienced UI/UX Product Designer
                              </h4>
                            </div>
                          </td>

                          <td>15 Oct 2021</td>
                          <td>22 Dec 2021</td>
                          <td>
                            <a
                              href="dashboard-manage-applications.html"
                              className="theme-bg text-light rounded px-3 py-2 ft-medium"
                            >
                              04
                            </a>
                          </td>
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
                                className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                              >
                                <i className="lni lni-pencil"></i>
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
          </div>
        </div>
      </div>
      {/* <!-- ======================= dashboard Detail End ======================== --> */}
    </>
  );
};

export default EmployerManageJobs;
