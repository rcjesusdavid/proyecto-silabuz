import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CJOBS_API from "../utils/consolejobsAPI";

const RegisterFormCompany = () => {
  const [razonSocial, setRazonSocial] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [ruc, setRuc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [businessSector, setBusinessSector] = useState([]);
  const [selectedBusinessSector, setSelectedBusinessSector] = useState([]);

  // const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    CJOBS_API.get(`/company/commons/bussiness/`).then((res) => {
      console.log(res);
      setBusinessSector(res.data);
    });
  }, []);

  const registrarse = (event) => {
    event.preventDefault();

    const body = {
      business_name: razonSocial,
      tradename: tradeName,
      ruc: ruc,
      email: email,
      password: password,
    };

    CJOBS_API.post("/company/signup", body)
      .then((res) => {
        console.log(res);
        navigate("/login-company");
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
                    <h3>Registro Empresa</h3>
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
                src="../assets/img/business.jpg"
                alt=""
                className="img-cover-full rounded"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mfliud">
              <form className="border p-3 rounded">
                <div className="row">
                  <div className="form-group col-md-12">
                    <label className="text-dark ft-medium">
                      Razon Social *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Razon social"
                      value={razonSocial}
                      onChange={(event) =>
                        setRazonSocial(event.currentTarget.value)
                      }
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <label className="text-dark ft-medium">
                      Sector Empresarial *
                    </label>
                    <select
                      className="form-control rounded"
                      value={selectedBusinessSector}
                      onChange={(e) =>
                        setSelectedBusinessSector(e.currentTarget.value)
                      }
                    >
                      <option>Seleccione...</option>

                      {businessSector.map((bsector) => {
                        return (
                          <option key={bsector.id} value={bsector.id}>
                            {bsector.name}
                          </option>
                        );
                      })}
                    </select>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="text-dark ft-medium">
                      Nombre Comercial *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre comercial de la empresa"
                      value={tradeName}
                      onChange={(event) =>
                        setTradeName(event.currentTarget.value)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-dark ft-medium">RUC *</label>
                    <input
                      maxLength={11}
                      type="number"
                      className="form-control"
                      placeholder="RUC"
                      value={ruc}
                      onChange={(event) => setRuc(event.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between"></div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label className="text-dark ft-medium">Email *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email@correo.com"
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-dark ft-medium">Contraseña *</label>
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
    </>
  );
};

export default RegisterFormCompany;
