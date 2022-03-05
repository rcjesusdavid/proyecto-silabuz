import React from "react";

const CandidatePublic = () => {
  return (
    <>
      {/* <!-- ======================= Top Breadcrubms ======================== --> */}
      <div className="bg-light py-5">
        <div className="ht-30"></div>
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <h1 className="ft-medium">Jesus David Rodriguez</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li
                    className="breadcrumb-item active theme-cl"
                    aria-current="page"
                  >
                    Detalles del candidato
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="ht-30"></div>
      </div>
      {/* <!-- ======================= Top Breadcrubms ======================== --> */}

      {/* <!-- ======================= Dashboard Detail ======================== --> */}
      <section className="middle">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
              <div className="d-block border rounded mfliud-bot mb-4">
                <div className="cdt_author px-2 pt-5 pb-4">
                  <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                    <img
                      src="assets/img/perfil.jpeg"
                      className="img-fluid circle"
                      width="100"
                      alt=""
                    />
                  </div>
                  <div className="dash_caption mb-3">
                    <h4 className="fs-lg ft-medium mb-0 lh-1">
                      Jesus David Rodriguez
                    </h4>
                    <p className="m-0 p-0">Frontend Developer</p>
                    <span className="text-muted smalls">
                      <i className="lni lni-map-marker mr-1"></i>Lima, Perú
                    </span>
                  </div>
                  <div className="jb-list-01-title px-2">
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">
                      Javascript
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">
                      React.js
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-danger bg-light-danger">
                      Node.js
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-info bg-light-info">
                      CSS3
                    </span>
                    <span className="px-2 mb-2 d-inline-flex py-1 rounded text-purple bg-light-purple">
                      HTML5
                    </span>
                  </div>
                </div>

                <div className="cdt_caps">
                  <div className="job_grid_footer pb-3 px-3 d-flex align-items-center justify-content-between">
                    <div className="df-1 text-muted">
                      <i className="lni lni-briefcase mr-1"></i>jesusd@linkedin
                    </div>
                    <div className="df-1 text-muted">
                      <i className="lni lni-laptop-phone mr-1"></i>Junior
                      Developer
                    </div>
                  </div>
                  <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                    <div className="df-1 text-muted">
                      <i className="lni lni-envelope mr-1"></i>jesusd@correo.com
                    </div>
                    <div className="df-1 text-muted">
                      <i className="lni lni-graduation mr-1"></i>Bachiller
                    </div>
                  </div>
                </div>

                {/* <!-- <div className="cdt_caps py-5 px-3">
                  <a
                    href="#"
                    className="btn btn-md theme-bg text-light rounded full-width"
                    >Download Resume</a
                  >
                </div> --> */}
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-8 col-xl-8">
              {/* <!-- row --> */}
              <div className="row align-items-start">
                {/* <!-- About --> */}
                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">
                    Sobre Jesus David Rodriguez
                  </h4>
                  <p>
                    Apasionado con el mundo de la tecnología, energético y
                    perseverante. Abierto a nuevas experiencias educativas y
                    profesionales que rompan lo rutinario sin desviarnos del
                    objetivo.
                  </p>
                </div>

                {/* <!-- Qualification --> */}
                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">Educacion</h4>
                  <div className="exslio-list mt-3">
                    <ul>
                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">UPTOS "CR"</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-graduation mr-1"></i>Ing.
                              Informatica
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2017
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Experience --> */}
                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">
                    Experiencia y/o Proyectos personales
                  </h4>
                  <div className="exslio-list mt-3">
                    <ul>
                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">
                            Proyecto Integrador para Gestion de empleo
                          </h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>Lima,
                              Peru
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>Web
                              Development
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2021 -
                              2022
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Desarrollo de una herramienta util para la gestion
                              de candidatos para empresas, y aplicacion y
                              obtencion de empleo por parte de los candidatos.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">IT Solutions</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>Lima,
                              Peru
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>
                              Soporte tecnico IT
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2020 -
                              2020
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Solucion de insidencias en la empresa en cuestion,
                              para optimizar los procesos que se llevan a cabo
                              dentro de la misma. y mejorar iterativamente el
                              servicio prestado
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">
                            Web Solutions
                          </h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>Lima,
                              Peru
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>
                              Frontend Developer
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2019 -
                              2020
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Desarrollo de una interfaz grafica amigable y
                              responsive, que cubre con los requisitos del
                              cliente.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Skills --> */}
                <div className="abt-cdt d-block full-width">
                  <h4 className="ft-medium mb-1 fs-md">Habilidades</h4>
                  <ul className="p-0 skills_tag text-left">
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Node.js
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        React.js
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Javascript
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Python
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        MySQL
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        SQL
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Flask
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Database
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- row --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= Dashboard Detail End ======================== --> */}
    </>
  );
};

export default CandidatePublic;
