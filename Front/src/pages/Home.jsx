import React from "react";

const Home = () => {
  return (
    <>
      {/* <!-- ======================= Home Banner ======================== --> */}
      <div
        className="home-banner margin-bottom-0"
        style={{ background: "url(assets/img/banner.jpg) no-repeat" }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  <span className="count">Jobs++</span> Hora de conseguir tu
                  oportunidad
                </h1>
                <p className="fs-md ft-medium">
                  Has tu sueños realidad y trabaja en lo que te apasiona
                </p>
              </div>

              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Titulo de oferta, palabra clave o empresa"
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Localizacion"
                      />
                      <i className="bnc-ico lni lni-target"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="1">Categorias</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Cloud Computing</option>
                        <option value="4">Engineering Services</option>
                        <option value="5">Healthcare/Pharma</option>
                        <option value="6">Telecom/ Internet</option>
                        <option value="7">QA/Testing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Buscar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======================= Home Banner ======================== --> */}

      {/* <!-- ======================= Job List ======================== --> */}
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Top ofertas</h6>
                <h2 className="ft-bold">Ofertas mas populares</h2>
              </div>
            </div>
          </div>

          {/* <!-- row --> */}
          <div className="row align-items-center">
            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-warning text-warning px-2 py-1 rounded">
                    Part Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-purple text-purple px-2 py-1 rounded">
                    Contract
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-danger text-danger px-2 py-1 rounded">
                    Enternship
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-purple text-purple px-2 py-1 rounded">
                    Contract
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-danger text-danger px-2 py-1 rounded">
                    Enternship
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-warning text-warning px-2 py-1 rounded">
                    Part Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="assets/img/empresa-1.jfif"
                      className="img-fluid"
                      width="70"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h6 className="mb-0 lh-1 ft-medium medium">
                    <a
                      href="employer-detail.html"
                      className="text-muted medium"
                    >
                      Google Inc
                    </a>
                  </h6>
                  <h4 className="mb-0 ft-medium medium">
                    <a href="job-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1"></i>
                    <span>Lima, Peru</span>
                  </div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="df-1 text-muted">
                    <i className="lni lni-wallet mr-1"></i>10.000 Soles.
                  </div>
                  <div className="df-1 text-muted">
                    <i className="lni lni-timer mr-1"></i>hace 3 dias
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}

          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="job-search-v1.html"
                  className="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                >
                  Explorar mas ofertas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= Job List ======================== --> */}

      {/* <!-- ======================= About Start ============================ --> */}
      <section className="space gray">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="m-spaced">
                <div className="position-relative">
                  <div className="mb-1">
                    <span className="theme-bg-light theme-cl px-2 py-1 rounded">
                      Acerca de ConsoleJobs
                    </span>
                  </div>
                  <h2 className="ft-bold mb-3">
                    Proveer la facilidad de empleabilidad a traves de esta
                    poderosa herramienta
                  </h2>
                  <p className="mb-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img
                  src="assets/img/trabajar.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= About Start ============================ --> */}

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
      <a id="back2Top" className="top-scroll" title="Back to top" href="#">
        <i className="ti-arrow-up"></i>
      </a>
      {/* <!-- ======================= Blog Start ============================ --> */}
    </>
  );
};

export default Home;
