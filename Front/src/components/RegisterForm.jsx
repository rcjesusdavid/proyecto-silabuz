import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registrarse = (event) => {
    event.preventDefault();

    const body = {
      username: username,
      password: password,
      email: email,
    };

    console.log(body);
    CJOBS_API.post("authentication/signup/", body)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="gray py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    Registro General
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* < !-- ======================= Register Detail ======================== --> */}
      <section className="middle">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mfliud">
              <form className="border p-3 rounded">
                {/* <div className="row">
                  <div className="form-group col-md-6">
                    <label>RUC *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Razon Social *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirmar Contraseña"
                    />
                  </div>
                </div> */}
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Nombre de Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(event) =>
                        setUsername(event.currentTarget.value)
                      }
                    />
                  </div>
                  {/* <div className="form-group col-md-6">
                    <label className="text-dark ft-medium">Soy:</label>
                    <select className="form-control rounded">
                      <option>Postulante</option>

                      <option>Empresa</option>
                    </select>
                  </div> */}
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email@correo.com"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Contraseña *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between"></div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    onClick={registrarse}
                    className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======================= Register End ======================== --> */}
    </>
  );
};

export default RegisterForm;
