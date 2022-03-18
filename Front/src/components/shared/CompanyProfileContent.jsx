import { React, useState, useEffect } from "react";
import CJOBS_API from "../../utils/consolejobsAPI";

const CompanyProfileContent = () => {
  const [busisnessName, setBusisnessName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [ruc, setRuc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [foundationYear, setFoundationYear] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [addressDetails, setAddressDetails] = useState("");

  //  Selects Dinamicos
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedBusinessSector, setSelectedBusinessSector] = useState("");

  const [countries, setCountries] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [businessSector, setBusinessSector] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`company/commons/bussiness/`).then((res) => {
      setBusinessSector(res.data);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/`).then((res) => {
      setCountries(res.data);
      console.log(res);
    });
  }, []);

  const changeSelectedCountry = (country_id) => {
    CJOBS_API.get(`commons/ubigeo/country/${country_id}/`).then((res) => {
      setDepartments(res.data);
      console.log(res);
    });
  };

  const changeSelectedDepartment = (department_id) => {
    CJOBS_API.get(`/commons/ubigeo/country/region/${department_id}/`).then(
      (res) => {
        setProvinces(res.data);
        console.log(res);
      }
    );
  };

  const chageSelectedProvinces = (province_id) => {
    CJOBS_API.get(
      `commons/ubigeo/country/region/subregion/${province_id}/`
    ).then((res) => {
      setDistricts(res.data);
      console.log(res);
    });
  };

  // FIN Selects Dinamicos

  const body = {
    business_name: busisnessName,
    tradename: tradeName,
    phone: phone,
    about: aboutCompany,
    foundation_year: foundationYear,
    business_sector: selectedBusinessSector,
  };

  const updateCompanyProfile = (event) => {
    event.preventDefault();
    console.log(body);
    CJOBS_API.patch("company/profile", body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        localStorage.setItem("name", tradeName);
        console.log(res);
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    CJOBS_API.get(`company/profile`, {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    }).then((res) => {
      setBusisnessName(res.data.business_name);
      setTradeName(res.data.tradename);
      setRuc(res.data.ruc);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setSelectedBusinessSector(res.data.business_sector);
      setFoundationYear(res.data.foundation_year);
      setAboutCompany(res.data.about);
      setSelectedCountry(res.data.address.country.id);
      setSelectedDepartment(res.data.address.region.id);
      setSelectedProvince(res.data.address.sub_region.id);
      setSelectedDistrict(res.data.address.district.id);
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
                    <i className="fa fa-user mr-1 theme-cl fs-sm"></i>Mi Cuenta
                  </h4>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  {/* START Profile Avatar */}
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div class="profile-pic">
                      <label class="-label" for="file">
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
                  </div>
                  {/* FIN Profile Avatar */}

                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Acerca de la empresa
                          </label>
                          <textarea
                            className="form-control with-light"
                            value={aboutCompany}
                            onChange={(event) =>
                              setAboutCompany(event.currentTarget.value)
                            }
                            placeholder="👋 Aquí pudes detallar una breve historia de tu empresa"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Razón social
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={busisnessName}
                            onChange={(event) =>
                              setBusisnessName(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Nombre comercial
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={tradeName}
                            onChange={(event) =>
                              setTradeName(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">R.U.C</label>
                          <input
                            readOnly
                            type="text"
                            className="form-control rounded"
                            value={ruc}
                            onChange={(event) =>
                              setRuc(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Correo electrónico
                          </label>
                          <input
                            readOnly
                            type="email"
                            className="form-control rounded"
                            value={email}
                            onChange={(event) =>
                              setEmail(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Teléfono
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={phone}
                            onChange={(event) =>
                              setPhone(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Sector Empresarial
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
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Año de Fundación
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            value={foundationYear}
                            onChange={(event) =>
                              setFoundationYear(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>

                      {/* <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                          >
                            Guardar cambios
                          </button>
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
                        placeholder="https://www.facebook.com"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Instagram</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.instagram.com"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.linkedin.com"
                      />
                    </div>
                  </div>

                  {/* <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div> */}
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
                    Información de Contacto{" "}
                  </h4>
                  <span className=" text-danger">
                    Esta información es confidencial
                  </span>
                </div>
              </div>

              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="form-group">
                      <label className="text-dark ft-medium">País</label>

                      <select
                        className="form-control rounded"
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.currentTarget.value);
                          changeSelectedCountry(e.currentTarget.value);
                        }}
                      >
                        <option>Seleccione...</option>

                        {countries.map((country) => {
                          return (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Departamento
                      </label>
                      <select
                        className="form-control rounded"
                        value={selectedDepartment}
                        onChange={(e) => {
                          setSelectedDepartment(e.currentTarget.value);
                          changeSelectedDepartment(e.currentTarget.value);
                        }}
                      >
                        <option>Seleccione...</option>

                        {departments.map((department) => {
                          return (
                            <option key={department.id} value={department.id}>
                              {department.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Provincia</label>
                      <select
                        className="form-control rounded"
                        value={selectedProvince}
                        onChange={(e) => {
                          setSelectedProvince(e.currentTarget.value);
                          chageSelectedProvinces(e.currentTarget.value);
                        }}
                      >
                        <option>Seleccione...</option>

                        {provinces.map((province) => {
                          return (
                            <option key={province.id} value={province.id}>
                              {province.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Distrito</label>
                      <select
                        className="form-control rounded"
                        value={selectedDistrict}
                        onChange={(e) =>
                          setSelectedDistrict(e.currentTarget.value)
                        }
                      >
                        <option>Seleccione...</option>

                        {districts.map((district) => {
                          return (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Dirección</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        value={addressDetails}
                        onChange={(event) =>
                          setAddressDetails(event.currentTarget.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                        onClick={updateCompanyProfile}
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

export default CompanyProfileContent;
