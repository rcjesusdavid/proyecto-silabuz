import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="light-footer skin-light-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widget">
                <img
                  src="assets/img/logo-1.png"
                  className="img-footer small mb-2"
                  alt=""
                />
                <div className="address mt-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="dark-theme-cl">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="dark-theme-cl">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="dark-theme-cl">
                        <i className="lni lni-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="dark-theme-cl">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="dark-theme-cl">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Ver candidatos</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">
                      <i class="lni lni-cogs"></i> Explorar Candidatos
                    </a>
                  </li>
                  <li>
                    <Link to="/postulant-public-profile">
                      <i class="lni lni-cogs"></i> Perfil Publico
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Ver empresas</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">
                      <i class="lni lni-cogs"></i> Explorar empresas
                    </a>
                  </li>
                  <li>
                    <Link to="/company-public-profile">
                      <i class="lni lni-cogs"></i> Perfil Publico
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Acerca de ConsoleJobs</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">¿Quienes somos?</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom br-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 text-center">
              <p className="mb-0">Bootcamp Silabuz Fullstack - ConsoleJobs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
