import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* <!-- ======================= About ConsoleJobs ============================ --> */}
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
                    Somos una agencia de empleo que trabaja de la mano con
                    empresas y para aquellos profesionales en el mundo de la
                    tecnología puedan postular y crear su propio perfíl.
                    Ofrecemos herramientas que te ayudan a crear una
                    presentación concreta y certera, para que puedas postular
                    cumpliendo con la información requerida y necesaria. Así
                    poder optar por un trabajo digno permitiendo el crecimiento
                    profesional y personal.
                  </p>
                  <p>
                    A diferencia de la competencia investigada, nuestro
                    diferencial es que nuestro principal objetivo es empoderar
                    al talento que da forma al mundo digital.
                  </p>
                  <p>
                    No es un secreto que en este campo somos eternos aprendices.
                    Es por ello que brindaremos capacitación constante a través
                    de nuestro Blog, una plataforma informativa y de educación
                    especializada.
                  </p>

                  <p>
                    En pocas palabras, empoderamos y capacitamos a profesionales
                    para que se vuelvan postulantes relevantes y los conectamos
                    con empresas importantes del rubro, para así lograr
                    resultados increíbles.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img
                  src="assets/img/trabajar.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= FIN About ConsoleJobs ============================ --> */}
    </>
  );
};

export default AboutUs;
