import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CJOBS_API from "../../utils/consolejobsAPI";

const PostWorkOfferContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [benefit, setBenefit] = useState("");
  const [requirements, setRequirements] = useState("");

  const navigate = useNavigate();

  //Job Offer details
  const [areas, setAreas] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [roles, setRoles] = useState([]);
  const [workdays, setWorkdays] = useState([]);

  const [selectedArea, setSelectedArea] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");

  useEffect(() => {
    CJOBS_API.get(`/job/commons/area/`).then((res) => {
      console.log(res);
      setAreas(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/experience/`).then((res) => {
      console.log(res);
      setExperiences(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/modality/`).then((res) => {
      console.log(res);
      setModalities(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/role/`).then((res) => {
      console.log(res);
      setRoles(res.data);
    });
  }, []);

  useEffect(() => {
    CJOBS_API.get(`/job/commons/workday/`).then((res) => {
      console.log(res);
      setWorkdays(res.data);
    });
  }, []);

  //Pack Combo Array UBIGEO
  const [countries, setCountries] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [addressDetails, setAddressDetails] = useState("");

  //  Selects Dinamicos
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);

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

  //Create Offer Function
  const postOffer = (event) => {
    event.preventDefault();

    const body = {
      title: title,
      description: description,
      benefit: benefit,
      requirements: requirements,
      work_area: selectedArea,
      work_experience: selectedExperience,
      work_modality: selectedModality,
      workday: selectedWorkday,
    };

    CJOBS_API.post("/job/create", body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        navigate("/company-profile");
      })
      .catch((error) => console.log(error));
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
                    <i className="fa fa-file mr-1 theme-cl fs-sm"></i>
                    Publicar Oferta
                  </h4>
                </div>
              </div>
              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Titulo</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Titulo de la oferta"
                            value={title}
                            onChange={(event) =>
                              setTitle(event.currentTarget.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Descripcion de la oferta
                          </label>
                          <textarea
                            className="form-control rounded"
                            placeholder="Descripcion de la oferta laboral"
                            value={description}
                            onChange={(event) =>
                              setDescription(event.currentTarget.value)
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Beneficios de la oferta
                          </label>
                          <textarea
                            className="form-control rounded"
                            placeholder="Descripcion de la oferta laboral"
                            value={benefit}
                            onChange={(event) =>
                              setBenefit(event.currentTarget.value)
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Requerimientos de la oferta
                          </label>
                          <textarea
                            className="form-control rounded"
                            placeholder="Descripcion de la oferta laboral"
                            value={requirements}
                            onChange={(event) =>
                              setRequirements(event.currentTarget.value)
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="m-4">
                      {" "}
                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Tipo de Jornada
                          </label>
                          <select
                            className="form-control rounded"
                            value={selectedWorkday}
                            onChange={(e) => {
                              setSelectedWorkday(e.currentTarget.value);
                            }}
                          >
                            <option>Seleccione...</option>

                            {workdays.map((workday) => {
                              return (
                                <option key={workday.id} value={workday.id}>
                                  {workday.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Modalidad
                          </label>
                          <select
                            className="form-control rounded"
                            value={selectedModality}
                            onChange={(e) => {
                              setSelectedModality(e.currentTarget.value);
                            }}
                          >
                            <option>Seleccione...</option>

                            {modalities.map((modality) => {
                              return (
                                <option key={modality.id} value={modality.id}>
                                  {modality.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Experiencia
                          </label>
                          <select
                            className="form-control rounded"
                            value={selectedExperience}
                            onChange={(e) => {
                              setSelectedExperience(e.currentTarget.value);
                            }}
                          >
                            <option>Seleccione...</option>

                            {experiences.map((experience) => {
                              return (
                                <option
                                  key={experience.id}
                                  value={experience.id}
                                >
                                  {experience.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Area</label>
                          <select
                            className="form-control rounded"
                            value={selectedArea}
                            onChange={(e) => {
                              setSelectedArea(e.currentTarget.value);
                            }}
                          >
                            <option>Seleccione...</option>

                            {areas.map((area) => {
                              return (
                                <option key={area.id} value={area.id}>
                                  {area.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Rol</label>
                          <select
                            className="form-control rounded"
                            value={selectedRole}
                            onChange={(e) => {
                              setSelectedRole(e.currentTarget.value);
                            }}
                          >
                            <option>Seleccione...</option>

                            {roles.map((role) => {
                              return (
                                <option key={role.id} value={role.id}>
                                  {role.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="m-4">
                      {" "}
                      <hr />
                    </div>
                    <div className="row">
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
                                <option
                                  key={department.id}
                                  value={department.id}
                                >
                                  {department.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Provincia
                          </label>
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
                          <label className="text-dark ft-medium">
                            Distrito
                          </label>
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
                          <label className="text-dark ft-medium">
                            Dirección
                          </label>
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

                      <div className="col-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                            onClick={postOffer}
                          >
                            Publicar Oferta
                          </button>
                        </div>
                      </div>
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

export default PostWorkOfferContent;
