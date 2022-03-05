import React from "react";
import { Link } from "react-router-dom";

const DashCandidate = () => {
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
                  <Link to="/appliedofferts">
                    <i className="lni lni-briefcase mr-2"></i>Ofertas aplicadas
                  </Link>
                </li>

                <li>
                  <a href="dashboard-saved-jobs.html">
                    <i className="lni lni-bookmark mr-2"></i>Ofertas guardadas
                  </a>
                </li>
              </ul>
              <ul data-submenu-title="Mi Cuenta">
                <li>
                  <Link to="/candidateprofile">
                    <i className="lni lni-user mr-2"></i>Mi Perfil
                  </Link>
                </li>
                <li>
                  <Link to="/changepass">
                    <i className="lni lni-lock-alt mr-2"></i>Cambiar contraseña
                  </Link>
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
                        Area de trabajo
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="dash-widgets py-5 px-4 bg-info rounded">
                  <h2 className="ft-medium mb-1 fs-xl text-light">46</h2>
                  <p className="p-0 m-0 text-light fs-md">
                    Ofertadas aplicadas
                  </p>
                  <i className="lni lni-empty-file"></i>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="dash-widgets py-5 px-4 bg-purple rounded">
                  <h2 className="ft-medium mb-1 fs-xl text-light">32</h2>
                  <p className="p-0 m-0 text-light fs-md">Ofertas Guardadas</p>
                  <i className="lni lni-heart"></i>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="dashboard-gravity-list with-icons">
                  <h4 className="mb-0 ft-medium">Actividades recientes</h4>
                  <ul>
                    <li>
                      <i className="dash-icon-box ti-heart text-danger bg-light-purple"></i>
                      Has guardado una oferta
                      <strong className="ft-medium text-dark">
                        <a href="#">Backend Develeoper</a>
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-heart text-danger bg-light-purple"></i>
                      Has guardado una oferta
                      <strong className="ft-medium text-dark">
                        <a href="#">Python Develeoper</a>
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-heart text-danger bg-light-purple"></i>
                      Has guardado una oferta
                      <strong className="ft-medium text-dark">
                        <a href="#">PHP Develeoper</a>
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-heart text-danger bg-light-purple"></i>
                      Has guardado una oferta
                      <strong className="ft-medium text-dark">
                        <a href="#">Web UI Develeoper</a>
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>
                  </ul>
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

export default DashCandidate;
