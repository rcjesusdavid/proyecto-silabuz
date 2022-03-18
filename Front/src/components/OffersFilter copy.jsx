import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const OffersFilter = () => {
  const [datos, setDatos] = useState([]);
  const [areas, setAreas] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [roles, setRoles] = useState([]);
  const [workdays, setWorkdays] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`/job/list`).then((res) => {
      console.log(res);
      setDatos(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/area/`).then((res) => {
      console.log(res);
      setAreas(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/experience/`).then((res) => {
      console.log(res);
      setExperiences(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/modality/`).then((res) => {
      console.log(res);
      setModalities(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/role/`).then((res) => {
      console.log(res);
      setRoles(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/workday/`).then((res) => {
      console.log(res);
      setWorkdays(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/region/subregion/15/`).then((res) => {
      setDistricts(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      {/* <!-- ======================= Searchbar Banner ======================== --> */}
      <div className="py-5 theme-bg" data-overlay="0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-2">
                <h1 className="ft-bold mb-4">
                  Es momento de encontrar tu oportunidad de crecer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======================= Searchbar Banner ======================== --> */}

      {/* <!-- ======================= Filter Wrap Style 1 ======================== --> */}
      <section className="py-2 br-bottom br-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
              <h6 className="mb-0 ft-medium fs-sm">
                Ofertas laborales encontradas
              </h6>
            </div>

            {/*   <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
              <div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                <div className="single_fitres mr-2 br-right">
                  <select className="custom-select simple">
                    <option value="1" selected="">
                      Ordenar por
                    </option>
                    <option value="2">Recien publicados</option>
                    <option value="3">Ultimos publicados</option>
                  </select>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- ============================= Filter Wrap ============================== --> */}

      {/* <!-- ============================ Main Section Start ================================== --> */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="bg-white rounded">
                <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
                  <h4 className="ft-medium fs-lg mb-0">Filtro de busqueda</h4>
                  <div className="ssh-header">
                    <a
                      href="#search_open"
                      data-toggle="collapse"
                      aria-expanded="false"
                      role="button"
                      className="collapsed _filter-ico ml-2"
                    >
                      <i className="lni lni-text-align-right"></i>
                    </a>
                  </div>
                </div>

                {/* <!-- Find New Property --> */}
                <div
                  className="sidebar-widgets collapse miz_show"
                  id="search_open"
                  data-parent="#search_open"
                >
                  <div className="search-inner">
                    <div className="filter-search-box px-4 pt-3 pb-0">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar por palabra clave..."
                        />
                      </div>
                    </div>

                    <div className="filter_wraps">
                      {/* <!-- Job Locations Search --> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#locations"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="ft-medium fs-md pb-0 collapsed"
                            >
                              Localizacion
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="locations"
                          data-parent="#locations"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="b1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                        checked=""
                                      />
                                      <label
                                        for="b1"
                                        className="checkbox-custom-label"
                                      >
                                        Amazonas (21)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        for="b2"
                                        className="checkbox-custom-label"
                                      >
                                        Áncash (12)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        for="b3"
                                        className="checkbox-custom-label"
                                      >
                                        Apurímac (21)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ac1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ac1"
                                            className="checkbox-custom-label"
                                          >
                                            Abancay (06)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ac2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ac2"
                                            className="checkbox-custom-label"
                                          >
                                            Andahuaylas (07)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ac3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ac3"
                                            className="checkbox-custom-label"
                                          >
                                            Antabamba (08)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="b4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        for="b4"
                                        className="checkbox-custom-label"
                                      >
                                        Arequipa (04)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ad1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ad1"
                                            className="checkbox-custom-label"
                                          >
                                            Arequipa (32)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ad2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ad2"
                                            className="checkbox-custom-label"
                                          >
                                            Camaná (42)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ad3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ad3"
                                            className="checkbox-custom-label"
                                          >
                                            Caravelí (22)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <input
                                        id="b5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        for="b5"
                                        className="checkbox-custom-label"
                                      >
                                        Ayacucho (15)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="b6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        for="b6"
                                        className="checkbox-custom-label"
                                      >
                                        Lima (09)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Job types Search  Modalidad--> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#working_modality"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="ft-medium fs-md pb-0 collapsed"
                            >
                              Modalidad
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="working_modality"
                          data-parent="#jbtypes"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card Modalidad --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    {modalities.map((modality, i) => {
                                      return (
                                        <li key={i}>
                                          <input
                                            id={modality.id}
                                            className="radio-custom"
                                            name="working_modality"
                                            type="radio"
                                          />
                                          <label
                                            for={modality.id}
                                            className="radio-custom-label"
                                          >
                                            {modality.name}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- FIN Single Filter Card Modalidad --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Job types Search  Modalidad--> */}

                      {/* <!-- Job types Search  Jornada--> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#jbtypes"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="ft-medium fs-md pb-0 collapsed"
                            >
                              Jornada laboral
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="jbtypes"
                          data-parent="#jbtypes"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card Jornada --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    {workdays.map((workday, i) => {
                                      return (
                                        <li key={i}>
                                          <input
                                            id={workday.id}
                                            className="radio-custom"
                                            name="working_time"
                                            type="radio"
                                          />
                                          <label
                                            for={workday.id}
                                            className="radio-custom-label"
                                          >
                                            {workday.name}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- FIN Single Filter Card Jornada --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Job types Search  Jornada--> */}

                      {/* <!-- Job Level Search Experience --> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#experience"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="ft-medium fs-md pb-0 collapsed"
                            >
                              Experiencia
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="experience"
                          data-parent="#jblevel"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card Experience --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    {experiences.map((experience, i) => {
                                      return (
                                        <li key={i}>
                                          <input
                                            id={experience.id}
                                            className="checkbox-custom"
                                            name="experience_time"
                                            type="checkbox"
                                          />
                                          <label
                                            for={experience.id}
                                            className="checkbox-custom-label"
                                          >
                                            {experience.name}
                                          </label>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!--  FIN Single Filter Card Experience --> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Job Level Search Experience --> */}
                    </div>
                    <div className="form-group filter_button pt-2 pb-4 px-4">
                      <button
                        type="submit"
                        className="btn btn-md theme-bg text-light rounded full-width"
                      >
                        Mostrar resultados
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Sidebar End --> */}
            </div>

            {/* <!-- Item Wrap Start WorkOffer --> */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              {/* <!-- row --> */}
              <div className="row align-items-center">
                {/* <!-- Single Work Offer --> */}
                {datos.map((dato, i) => {
                  return (
                    <div
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                      key={i}
                    >
                      <div className="jbr-wrap text-left border rounded">
                        <div className="cats-box mlb-res rounded bg-white d-flex align-items-center justify-content-between px-3 py-3">
                          <div className="cats-box rounded bg-white d-flex align-items-center">
                            <div className="text-center">
                              <img
                                src="./assets/img/job-find.jpg"
                                // className="img-fluid"
                                width="55"
                                alt=""
                              />
                            </div>
                            <div className="cats-box-caption px-2">
                              <h4 className="fs-md mb-0 ft-medium">
                                {dato.title}
                              </h4>
                              <div className="d-block mb-2 position-relative">
                                <span className="text-muted medium">
                                  <p className="text-justify">
                                    {dato.description}
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center mlb-last">
                            <Link
                              to={"/work-offer-details/" + dato.id}
                              className="btn gray ft-medium apply-btn fs-sm rounded"
                            >
                              Ver oferta
                              <i className="lni lni-arrow-right-circle ml-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <!-- FIN Single Work Offer --> */}
              </div>
              {/* <!-- row --> */}

              {/* <!-- Pagination --> */}
              {/* <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="fas fa-arrow-circle-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="fas fa-arrow-circle-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <!-- FIN Pagination --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Main Section End ================================== --> */}
    </>
  );
};

export default OffersFilter;
