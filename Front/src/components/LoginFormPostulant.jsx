import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";
import { HeroSectionPostulant } from "./shared/HeroSectionPostulant";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginFormPostulant = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const body = { email: email, password: password };
    CJOBS_API.post("/postulant/signin", body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.auth_token);
        localStorage.setItem("email", res.data.postulant.email);
        localStorage.setItem("name", res.data.postulant.name);
        localStorage.setItem("dashboard", "/postulant-profile");
        MySwal.fire({
          title: "Correcto",
          html: "ingreso correcto",
          icon: "success",
        }).then(() => {
          navigate("/");
          window.location.reload(true);
        });
      })
      .catch((error) => {
        console.log(error);

        MySwal.fire({
          title: "Error",
          html: "Credenciales erroneas",
          icon: "error",
        });

        if (error.response.status) {
          console.log(error.response.status);
        }
      });
  };
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {/* <!-- Hero Section --> */}
      <HeroSectionPostulant></HeroSectionPostulant>
      {/* <!-- End Hero Section --> */}

      {/* < !-- ======================= Login Detail ======================== --> */}

      <section className="middle">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <h3 class="text-center m-1">Iniciar sesión</h3>
              <div className="card-body p-5">
                <div className="form-outline mb-4">
                  <label className="form-label">Email *</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="ingresa tu email"
                    data-lpignore="true"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </div>
                <div className="form-outline mb-4" id="is-relative">
                  <label className="form-label">Contraseña</label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="ingresa la contraseña"
                    data-lpignore="true"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                  <button id="eye-password" onClick={togglePassword}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </button>
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-primary btn-lg btn-block "
                    id="bnt-form"
                    onClick={login}
                    type="submit"
                  >
                    Ingresar
                  </button>
                </div>
                <p class="small mb-5 pb-lg-2">
                  <Link to={" "} className="text-muted">
                    ¿Recuperar contraseña?
                  </Link>
                </p>
                <p className="text-center">
                  ¿No tienes cuenta?{" "}
                  <Link to={"/register-postulant"} className="link-info">
                    Registrate aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="middle">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mfliud">
              <img
                src="../assets/img/banner.jpg"
                alt=""
                className="img-cover-full rounded"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <form className="border p-3 rounded">
                <div className="form-group">
                  <label>Correo electronico *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="correo@correo.com"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Contraseña *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                </div>

                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-1"></div>
                    <div className="eltio_k2">
                      <Link to="/register-postulant">
                        ¿No se encuentra registrado?
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="form-group text-center">
                  <button
                    onClick={login}
                    type="submit"
                    className="btn btn-md theme-bg text-light fs-md ft-medium"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- ======================= Login End ======================== --> */}
    </>
  );
};

export default LoginFormPostulant;
