import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const body = { email: email, password: password };
    CJOBS_API.post("authentication/login/", body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("last_name", res.data.last_name);
        localStorage.setItem("bussisnes_name", res.data.bussisnes_name);

        // Validar que un postulante nunca podra acceder al dashboard empresa.
        if (!res.data.is_company) {
          navigate("/dashcandidate");
        } else {
          navigate("/dashemployer");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/* < !-- ======================= Login Detail ======================== --> */}
      <div className="gray py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="middle">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
                      <Link to="/">¿Ha olvidado su contraseña?</Link>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    onClick={login}
                    type="submit"
                    className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= Login End ======================== --> */}
    </>
  );
};

export default LoginForm;
