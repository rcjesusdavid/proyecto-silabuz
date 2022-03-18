import React from "react";

const HomeDashboardCompany = () => {
  return (
    <>
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
              <p className="p-0 m-0 text-light fs-md">Aplicaciones recibidas</p>
              <i className="lni lni-users"></i>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard-gravity-list with-icons">
              <h4 className="mb-0 ft-medium">Actividades Recientes</h4>
              <ul>
                <li>
                  <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                  Miguel Tenorio ha aplicado en tu oferta :
                  <strong className="ft-medium text-dark">IOS Developer</strong>
                  <a href="#" className="close-list-item">
                    <i className="fas fa-times"></i>
                  </a>
                </li>

                <li>
                  <i className="dash-icon-box ti-star text-success bg-light-success"></i>
                  Jonathan Huarca ha aplicado en tu oferta :
                  <strong className="ft-medium text-dark">IOS Developer</strong>
                  <a href="#" className="close-list-item">
                    <i className="fas fa-times"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeDashboardCompany;
