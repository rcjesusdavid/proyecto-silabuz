import { React, useState, useEffect } from "react";
import CJOBS_API from "../utils/consolejobsAPI";
import { Link } from "react-router-dom";
import Banner from "../components/shared/Banner";
import AboutUs from "../components/shared/AboutUs";

const Home = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`/job/list`).then((res) => {
      console.log(res);
      setDatos(res.data);
    });
  }, []);

  return (
    <>
      <Banner></Banner>

      {/* <!-- ======================= Job List ======================== --> */}
      <section className="middle" id="top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Top ofertas</h6>
                <h2 className="ft-bold">Ofertas mas populares</h2>
              </div>
            </div>
          </div>

          {/* <!-- row Work Offers --> */}
          <div className="row align-items-center">
            {/* <!-- Single --> */}

            {datos.map((dato, i) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={i}>
                  <div className="job_grid border rounded">
                    <div className="position-absolute ab-left"></div>
                    <div className="position-absolute ab-right">
                      <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                        Remota
                      </span>
                    </div>
                    <div className="job_grid_thumb mb-3 pt-5 px-3">
                      <Link
                        to={"/work-offer-details/" + dato.id}
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="./assets/img/job-find.jpg"
                          className="img-fluid"
                          width="70"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="job_grid_caption text-center pb-5 px-3">
                      <h6 className="mb-0 lh-1 ft-medium medium">
                        <a className="text-muted medium">
                          {dato.company.business_name}
                        </a>
                      </h6>
                      <h4 className="mb-0 ft-medium medium">
                        <span className="text-dark fs-md">{dato.title}</span>
                      </h4>
                      <div className="jbl_location">
                        <span>{dato.description}</span>
                      </div>
                    </div>
                    <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                      <div className="df-1 text-muted">{dato.job_role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- FIN row Work Offers --> */}

          {/* <!-- Explore Works offer button --> */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <Link
                  to="/offers-filter"
                  className="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                >
                  Explorar mas ofertas
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- FIN Explore Works offer button --> */}
        </div>
      </section>
      {/* <!-- ======================= Job List ======================== --> */}

      <AboutUs></AboutUs>

      {/* <!-- ======================= back to top button ======================== --> */}
      <a id="back2Top" className="top-scroll" title="Back to top" href="#">
        <i className="ti-arrow-up"></i>
      </a>
      {/* <!-- ======================= back to top button ======================== --> */}
    </>
  );
};

export default Home;
