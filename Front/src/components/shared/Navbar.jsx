import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const cerrars = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="header header-light dark-text">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img src="assets/img/logo-1.png" className="logo" alt="" />
              </Link>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <Link
                      to="/register"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">Registrarse</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li>
                  <Link to="/">Inicio</Link>
                </li>

                <li>
                  <Link to="/filterjobs">Explorar ofertas</Link>
                </li>

                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                {localStorage.getItem("token") ? (
                  <li>
                    <Link to="" className="ft-medium">
                      <i className="lni lni-user mr-2"></i>Bienvenido,{" "}
                      {localStorage.getItem("bussisnes_name")}
                      {"  "}
                      {localStorage.getItem("first_name")}
                      {localStorage.getItem("last_name")}
                    </Link>
                    <ul class="nav-dropdown nav-submenu">
                      <li>
                        <Link to="/dashcandidate">Area de trabajo</Link>
                      </li>
                      <li>
                        <Link to="/" onClick={() => cerrars()}>
                          Cerrar sesion
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="add-listing theme-bg">
                    <Link to="/login"> Entrar </Link>
                  </li>
                )}
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  {/* {!localStorage.getItem("token") && (
                    <Link to="/register" className="ft-medium">
                      <i className="lni lni-user mr-2"></i>Registro
                    </Link>
                  )} */}

                  {!localStorage.getItem("token") && (
                    <Link to="/registere" className="ft-medium">
                      <i className="lni lni-apartment mr-2"></i>Soy Empresa
                    </Link>
                  )}
                </li>
                <li>
                  {!localStorage.getItem("token") && (
                    <Link to="/registerp" className="ft-medium">
                      <i className="lni lni-user mr-2"></i>Soy Postulante
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
