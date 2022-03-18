import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const RegisterFormPostulant = () => {
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
    CJOBS_API.post("/postulant/signup", body)
      .then((res) => {
        console.log(res);
        navigate("/login-postulant");
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
                    <h3>Registro Postulante</h3>
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
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mfliud">
              <img
                src="../assets/img/banner.jpg"
                alt=""
                className="img-cover-full rounded"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mfliud">
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
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Correo electronico *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email@correo.com"
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                  </div>

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

                <div className="form-group text-center">
                  <button
                    type="submit"
                    onClick={registrarse}
                    className="btn btn-md theme-bg text-light fs-md ft-medium"
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
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100"></div>
        </div>
      </section>
    </>
  );
};

export default RegisterFormPostulant;
