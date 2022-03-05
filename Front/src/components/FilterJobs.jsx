import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const FilterJobs = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`console-jobs/work-offers/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setDatos(res.data);
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

            <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
              <div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                <div className="single_fitres mr-2 br-right">
                  <select className="custom-select simple">
                    <option value="1" selected="">
                      Ordenar por
                    </option>
                    <option value="2">Recien publicados</option>
                    <option value="3">Ultimos publicados</option>
                    <option value="4">Salario</option>
                  </select>
                </div>
              </div>
            </div>
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
                    <a className="clear_all ft-medium text-muted">Limpiar</a>
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
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ubicacion"
                        />
                      </div>
                    </div>

                    <div className="filter_wraps">
                      {/* <!-- Job categories Search --> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#categories"
                              className="ft-medium fs-md pb-0"
                              data-toggle="collapse"
                              aria-expanded="true"
                              role="button"
                            >
                              Area de trabajo
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse show"
                          id="categories"
                          data-parent="#categories"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="a1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                        checked=""
                                      />
                                      <label
                                        for="a1"
                                        className="checkbox-custom-label"
                                      >
                                        IT Computers (62)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="aa1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            for="aa1"
                                            className="checkbox-custom-label"
                                          >
                                            Web Design (31)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="aa2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            for="aa2"
                                            className="checkbox-custom-label"
                                          >
                                            Web development (20)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="aa3"
                                            className="checkbox-custom"
                                            name="Coffee"
                                            type="checkbox"
                                          />
                                          <label
                                            for="aa3"
                                            className="checkbox-custom-label"
                                          >
                                            SEO Services (43)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      <input
                                        id="a3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        for="a3"
                                        className="checkbox-custom-label"
                                      >
                                        Design & Media (22)
                                      </label>
                                    </li>

                                    <li>
                                      <input
                                        id="a5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        for="a5"
                                        className="checkbox-custom-label"
                                      >
                                        Apps Developements (17)
                                      </label>
                                      <ul className="no-ul-list filter-list">
                                        <li>
                                          <input
                                            id="ab1"
                                            className="checkbox-custom"
                                            name="ADA"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ab1"
                                            className="checkbox-custom-label"
                                          >
                                            IOS Development (12)
                                          </label>
                                        </li>
                                        <li>
                                          <input
                                            id="ab2"
                                            className="checkbox-custom"
                                            name="Parking"
                                            type="checkbox"
                                          />
                                          <label
                                            for="ab2"
                                            className="checkbox-custom-label"
                                          >
                                            Android Development (04)
                                          </label>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

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

                      {/* <!-- Job Skills Search --> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#skills"
                              data-toggle="collapse"
                              aria-expanded="false"
                              role="button"
                              className="ft-medium fs-md pb-0 collapsed"
                            >
                              Habilidades
                            </a>
                          </h4>
                        </div>
                        <div
                          className="widget-boxed-body collapse"
                          id="skills"
                          data-parent="#skills"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="c2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c2"
                                        className="checkbox-custom-label"
                                      >
                                        iPhone & Android (33)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c3"
                                        className="checkbox-custom-label"
                                      >
                                        Java & AJAX (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c4"
                                        className="checkbox-custom"
                                        name="Mother"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c4"
                                        className="checkbox-custom-label"
                                      >
                                        Account Manager (21)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c5"
                                        className="checkbox-custom"
                                        name="Outdoor"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c5"
                                        className="checkbox-custom-label"
                                      >
                                        WordPress (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c6"
                                        className="checkbox-custom"
                                        name="Pet"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c6"
                                        className="checkbox-custom-label"
                                      >
                                        Magento (42)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c7"
                                        className="checkbox-custom"
                                        name="Beauty"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c7"
                                        className="checkbox-custom-label"
                                      >
                                        Shopify (12)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c8"
                                        className="checkbox-custom"
                                        name="Bike"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c8"
                                        className="checkbox-custom-label"
                                      >
                                        PHP Script (08)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c9"
                                        className="checkbox-custom"
                                        name="Phone"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c9"
                                        className="checkbox-custom-label"
                                      >
                                        Drupal (32)
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="c11"
                                        className="checkbox-custom"
                                        name="Private"
                                        type="checkbox"
                                      />
                                      <label
                                        for="c11"
                                        className="checkbox-custom-label"
                                      >
                                        Joomla (50)
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Job types Search --> */}
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
                            {/* <!-- Single Filter Card --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="e2"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        for="e2"
                                        className="radio-custom-label"
                                      >
                                        Full time
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="e3"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        for="e3"
                                        className="radio-custom-label"
                                      >
                                        Part Time
                                      </label>
                                    </li>

                                    <li>
                                      <input
                                        id="e6"
                                        className="radio-custom"
                                        name="jtype"
                                        type="radio"
                                      />
                                      <label
                                        for="e6"
                                        className="radio-custom-label"
                                      >
                                        Rotativo
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Job Level Search --> */}
                      <div className="single_search_boxed px-4 pt-0 br-bottom">
                        <div className="widget-boxed-header">
                          <h4>
                            <a
                              href="#jblevel"
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
                          id="jblevel"
                          data-parent="#jblevel"
                        >
                          <div className="side-list no-border">
                            {/* <!-- Single Filter Card --> */}
                            <div className="single_filter_card">
                              <div className="card-body p-0">
                                <div className="inner_widget_link">
                                  <ul className="no-ul-list filter-list">
                                    <li>
                                      <input
                                        id="f1"
                                        className="checkbox-custom"
                                        name="ADA"
                                        type="checkbox"
                                        checked=""
                                      />
                                      <label
                                        for="f1"
                                        className="checkbox-custom-label"
                                      >
                                        Team Leader
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f2"
                                        className="checkbox-custom"
                                        name="Parking"
                                        type="checkbox"
                                      />
                                      <label
                                        for="f2"
                                        className="checkbox-custom-label"
                                      >
                                        Manager
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f3"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        for="f3"
                                        className="checkbox-custom-label"
                                      >
                                        Junior
                                      </label>
                                    </li>
                                    <li>
                                      <input
                                        id="f4"
                                        className="checkbox-custom"
                                        name="Coffee"
                                        type="checkbox"
                                      />
                                      <label
                                        for="f4"
                                        className="checkbox-custom-label"
                                      >
                                        Senior
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

            {/* <!-- Item Wrap Start --> */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              {/* <!-- row --> */}
              <div className="row align-items-center">
                {/* <!-- Single --> */}
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
                                src="https://picsum.photos/120/120"
                                className="img-fluid"
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
                                  <i className="lni lni-map-marker mr-1"></i>
                                  Lima, Peru
                                </span>
                                <span className="text-muted medium">
                                  <i className="lni lni-dollar mr-1"></i>
                                  Salario: {dato.salary} Soles
                                </span>
                                <span className="muted medium ml-2">
                                  <i className="lni lni-briefcase mr-1"></i>Full
                                  Time
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center mlb-last">
                            <Link
                              to="/ofertadetail"
                              className="btn gray ft-medium apply-btn fs-sm rounded"
                            >
                              Aplicar
                              <i className="lni lni-arrow-right-circle ml-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <!-- FIN Single --> */}
              </div>
              {/* <!-- row --> */}

              <div className="row">
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
                    {/* <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        18
                      </a>
                    </li> */}
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="fas fa-arrow-circle-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Main Section End ================================== --> */}
    </>
  );
};

export default FilterJobs;
