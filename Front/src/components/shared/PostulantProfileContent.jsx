import React, { useEffect, useState } from "react";
import CJOBS_API from "../../utils/consolejobsAPI";

const PostulantProfileContent = () => {
  const [postulantName, setPostulantName] = useState("");
  const [postulantLastName, setPostulantLastName] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const body = {
    name: postulantName,
    last_name: postulantLastName,
  };

  const updatePostulantProfile = (event) => {
    event.preventDefault();
    console.log(body);
    CJOBS_API.patch("postulant/profile", body, {
      headers: {
        "Content-Type": "aplication/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        localStorage.setItem("name", postulantName);
        console.log(res);
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    CJOBS_API.get(`postulant/profile`, {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    }).then((res) => {
      setPostulantName(res.data.name);
      setPostulantLastName(res.data.last_name);
      setEmail(res.data.email);
      console.log(res);
    });
  }, []);

  const avatarProfileContent = () => {
    const loadFile = function (event) {
      const image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
    };
  };

  return (
    <>
      <div className="dashboard-widg-bar d-block">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="fa fa-user mr-1 theme-cl fs-sm"></i>{" "}
                    Información de perfil
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div className="profile-pic">
                      <label className="-label" for="file">
                        <span>Cambiar imagen</span>
                      </label>
                      <input
                        id="file"
                        type="file"
                        onChange="{loadFile(event)}"
                      />
                      <img
                        src="https://png.pngitem.com/pimgs/s/516-5168760_upload-avatar-upload-avatar-png-transparent-png.png"
                        id="output"
                        width="200"
                      />
                    </div>
                    <div className="cv-pic">
                      <label className="-label" for="upload-cv">
                        <span>Geber CV</span>
                      </label>
                      <input id="upload-cv" type="file" />
                      <img
                        src="../assets/img/upload-cv.png"
                        id="output-cv"
                        width=""
                      />
                    </div>
                  </div>

                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Escribe una breve biografía sobre ti.
                          </label>
                          <textarea
                            className="form-control with-light"
                            placeholder="👋 Detalla brevemente algo sobre ti, tus intereses profesionales y laborales."
                            value={aboutme}
                            onChange={(event) =>
                              setAboutme(event.currentTarget.value)
                            }
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Nombres</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={postulantName}
                            onChange={(event) =>
                              setPostulantName(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Apellidos
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={postulantLastName}
                            onChange={(event) =>
                              setPostulantLastName(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Teléfono
                          </label>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control rounded"
                            placeholder="+51-45-678-567"
                            value={phone}
                            onChange={(event) =>
                              setPhone(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Correo electronico
                          </label>
                          <input
                            type="email"
                            className="form-control rounded"
                            placeholder="example@email.com"
                            readonly
                            disabled
                            value={email}
                            onChange={(event) =>
                              setEmail(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Ocupación
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={ocupation}
                            onChange={(event) =>
                              setOcupation(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Dominio del idioma Inglés
                          </label>
                          <select className="custom-select rounded">
                            <option>Seleccione </option>
                            <option>Básico</option>
                            <option>Intermedio</option>
                            <option>Avanzado</option>
                          </select>
                        </div>
                      </div>

                      {/* <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Idiomas</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value=""
                            placeholder="Ej: Español"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="ti-book mr-1 theme-cl fs-sm"></i>
                    Educacion
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Institución</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Grado Obtenido
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl- col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Fecha</label>
                      <input
                        type="date"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group text-right">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                      >
                        Añadir
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="ti-briefcase mr-1 theme-cl fs-sm"></i>
                    Experiencia Laboral
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Empresa</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Cargo</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Fecha Inicio
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Fecha de Cese
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Describa funcionalidades
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Describa logros obtenidos
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Escriba aquí"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group text-right">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                      >
                        Añadir
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="ti-facebook mr-1 theme-cl fs-sm"></i>Redes
                    Sociales
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Facebook</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Twitter</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.twitter.com/"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.linkedin.com/"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Github</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://github.com/"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="fas fa-lock mr-1 theme-cl fs-sm"></i>
                    Informacion de Contacto
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Pais</label>
                      <select className="form-control rounded">
                        <option>🇵🇪 Perú </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Ciudad</label>
                      <select className="form-control rounded">
                        <option>Lima</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Dirección</label>
                      <input
                        type="password"
                        className="form-control rounded"
                        placeholder="Ingresa la dirección de tu domicilio"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                        onClick={updatePostulantProfile}
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostulantProfileContent;
