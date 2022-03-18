import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";
import { HeroSectionCompany } from "./shared/HeroSectionCompany";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginFormCompany = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const body = { email: email, password: password };
    CJOBS_API.post("/company/signin", body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.auth_token);
        localStorage.setItem("id_user", 5);
        localStorage.setItem("email", res.data.company.email);
        localStorage.setItem("name", res.data.company.tradename);
        localStorage.setItem("dashboard", "/company-profile");
        MySwal.fire({
          title: "Correcto",
          html: "ingreso correcto",
          icon: "success",
        }).then(() => {
          navigate("/company-profile");
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

      <HeroSectionCompany></HeroSectionCompany>

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
                  <Link to={"/register-company"} className="link-info">
                    Registrate aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======================= Login End ======================== --> */}
    </>
  );
};

export default LoginFormCompany;
