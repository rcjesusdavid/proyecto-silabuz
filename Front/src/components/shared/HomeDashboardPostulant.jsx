import React from "react";

const HomeDashboardPostulant = () => {
  return (
    <>
      <div className="dashboard-widg-bar d-block">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="dash-widgets py-5 px-4 bg-info rounded">
              <h2 className="ft-medium mb-1 fs-xl text-light">46</h2>
              <p className="p-0 m-0 text-light fs-md">Ofertadas aplicadas</p>
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
    </>
  );
};

export default HomeDashboardPostulant;
