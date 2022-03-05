import React from "react";

const ChangePass = () => {
  return (
    <>
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
                      Cambiar Contraseña
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Aqui debe renderizar la opcion de activa --> */}
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="fa fa-lock mr-1 theme-cl fs-sm"></i>Cambiar
                      contraseña
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Contraseña actual
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Nueva contraseña
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Confirmar contraseña
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
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
    </>
  );
};

export default ChangePass;
