import React from "react";

const DashEmployer = () => {
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
                <li className="active">
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
                <div className="dash-widgets py-5 px-4 bg-success rounded">
                  <h2 className="ft-medium mb-1 fs-xl text-light">46</h2>
                  <p className="p-0 m-0 text-light fs-md">Ofertas publicadas</p>
                  <i className="lni lni-empty-file"></i>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="dash-widgets py-5 px-4 bg-purple rounded">
                  <h2 className="ft-medium mb-1 fs-xl text-light">87</h2>
                  <p className="p-0 m-0 text-light fs-md">
                    Aplicaciones recibidas
                  </p>
                  <i className="lni lni-users"></i>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="dashboard-gravity-list with-icons">
                  <h4 className="mb-0 ft-medium">Actividades Recientes</h4>
                  <ul>
                    <li>
                      <i className="dash-icon-box ti-files text-success bg-light-succ"></i>
                      Has publicado una oferta para:
                      <strong className="ft-medium text-dark">
                        IOS Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Yhoniel Suarez ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        IOS Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Yhoniel Suarez ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        Android Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Yhoniel Suarez ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        Web UI Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Miguel Tenorio ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        IOS Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Jonathan Huarca ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        IOS Developer
                      </strong>
                      <a href="#" className="close-list-item">
                        <i className="fas fa-times"></i>
                      </a>
                    </li>

                    <li>
                      <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                      Jesus Rodriguez ha aplicado en tu oferta :
                      <strong className="ft-medium text-dark">
                        IOS Developer
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

export default DashEmployer;
