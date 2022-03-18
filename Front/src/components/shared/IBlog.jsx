import React from "react";

const IBlog = () => {
  return (
    <>
      {/* <!-- ======================= Blog Start ============================ --> */}
      <section className="space min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h6 className="text-muted mb-0">Ultimas Noticias</h6>
                <h2 className="ft-bold">
                  Actualizate en las ultimas noticias del mundo tecnologico
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* <!-- Single Item --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="blg_grid_box">
                <div className="blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img
                      src="assets/img/notice.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blg_grid_caption">
                  <div className="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        Athena Bitcoin demanda a exejecutivo por sabotear su
                        relación con El Salvador
                      </a>
                    </h4>
                  </div>
                  <div className="blg_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicinga.
                      Lorem ipsum dolor sit amet, consectetur adipisicinga.
                    </p>
                  </div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-eye text-success"></i>
                            </div>
                            <div className="elsio_tx">10k</div>
                          </li>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-clock text-warning"></i>
                            </div>
                            <div className="elsio_tx">10 Jul 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Item --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="blg_grid_box">
                <div className="blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img
                      src="assets/img/notice.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blg_grid_caption">
                  <div className="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        Athena Bitcoin demanda a exejecutivo por sabotear su
                        relación con El Salvador
                      </a>
                    </h4>
                  </div>
                  <div className="blg_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio.
                    </p>
                  </div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-eye text-success"></i>
                            </div>
                            <div className="elsio_tx">10k</div>
                          </li>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-clock text-warning"></i>
                            </div>
                            <div className="elsio_tx">10 Jul 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Item --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="blg_grid_box">
                <div className="blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img
                      src="assets/img/notice.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="blg_grid_caption">
                  <div className="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        Athena Bitcoin demanda a exejecutivo por sabotear su
                        relación con El Salvador
                      </a>
                    </h4>
                  </div>
                  <div className="blg_desc">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-eye text-success"></i>
                            </div>
                            <div className="elsio_tx">10k</div>
                          </li>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-clock text-warning"></i>
                            </div>
                            <div className="elsio_tx">10 Jul 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= Blog Start ============================ --> */}
    </>
  );
};

export default IBlog;
