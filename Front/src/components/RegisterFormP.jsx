import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const RegisterFormP = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const registrarse = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
      name: firstname,
      last_name: lastname,
    };

    console.log(body);
    CJOBS_API.post("authentication/signup/postulant/", body)
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
                    Registro Postulante
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
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Nombres*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres"
                      value={firstname}
                      onChange={(event) =>
                        setFirstname(event.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Apellidos*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellidos"
                      value={lastname}
                      onChange={(event) =>
                        setLastname(event.currentTarget.value)
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Correo electronico *</label>
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

                  <div className="form-group col-md-6">
                    <label>Confirmar Contraseña *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirmar Contraseña"
                      value={password2}
                      onChange={(event) =>
                        setPassword2(event.currentTarget.value)
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

export default RegisterFormP;
