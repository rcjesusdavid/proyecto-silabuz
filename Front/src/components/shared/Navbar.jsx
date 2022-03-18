import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dashboard, setDashboard] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setDashboard(localStorage.getItem("dashboard"));
  }, [name]);

  const cerrars = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
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
              <div className="mobile_nav"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li>
                  <Link to="/offers-filter">Explorar ofertas</Link>
                </li>

                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                {localStorage.getItem("token") ? (
                  <li>
                    <Link to="" className="ft-medium">
                      <i className="lni lni-user mr-2"></i>
                      {name}
                    </Link>
                    <ul class="nav-dropdown nav-submenu">
                      <li>
                        <Link to={"" + dashboard + ""}>Area de trabajo</Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => cerrars()}>
                          Cerrar sesion
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <>
                    <li>
                      {!localStorage.getItem("token") && (
                        <Link to="/login-company" className="ft-medium">
                          <i className="lni lni-apartment mr-2"></i>Soy Empresa
                        </Link>
                      )}
                    </li>

                    <li>
                      {!localStorage.getItem("token") && (
                        <Link to="/login-postulant" className="ft-medium">
                          <i className="lni lni-user mr-2"></i>Soy Postulante
                        </Link>
                      )}
                    </li>
                  </>
                  // <li className="add-listing theme-bg">
                  //   <Link to="/login"> Entrar </Link>
                  // </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
