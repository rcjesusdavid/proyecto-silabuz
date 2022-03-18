import { React, useState, useEffect } from "react";
import CJOBS_API from "../../utils/consolejobsAPI";

const Banner = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/area/`).then((res) => {
      console.log(res);
      setAreas(res.data);
    });
  }, []);
  return (
    <>
      {/* <!-- ======================= Home Banner ======================== --> */}
      <div
        className="home-banner margin-bottom-0"
        style={{ background: "url(assets/img/technology.jpeg) no-repeat" }}
        data-overlay="2"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  <span className="count"></span>¿Buscas empleo? Nosotros lo
                  encontramos
                </h1>
                <p className="fs-md ft-medium">
                  Somos una plataforma abierta en la que puedes encontrar
                  oportunidades que te ayudan a impulsar tu carrera profesional.
                </p>
              </div>

              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Titulo de oferta, palabra clave o empresa"
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="1">Categorías</option>
                        <option value="2">Tecnología e Información (TI)</option>
                        <option value="3">Infraestructura</option>
                        <option value="4">Desarrollo de Software</option>
                        <option value="5">Administracion de Redes</option>
                        <option value="6">
                          Administracion de Base de Datos
                        </option>
                        <option value="7">Auditoría</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
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
    </>
  );
};

export default Banner;
