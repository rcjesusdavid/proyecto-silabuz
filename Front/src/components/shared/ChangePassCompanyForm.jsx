import React from "react";

const ChangePassCompanyForm = () => {
  return (
    <>
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
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
    </>
  );
};

export default ChangePassCompanyForm;
