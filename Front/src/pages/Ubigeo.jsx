import { React, useEffect, useState } from "react";
import CJOBS_API from "../utils/consolejobsAPI";

/* const useCountriesData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/`).then((res) => {
      setCountries(res.data);
      console.log(res);
    });
  }, []);

  return countries;
};

const useDepartmentsData = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/${id_contry}/`).then((res) => {
      setDepartments(res.data);
      console.log(res);
    });
  }, []);

  return departments;
};

const useProvincesData = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`/commons/ubigeo/country/region/${id_department}/`).then(
      (res) => {
        setProvinces(res.data);
        console.log(res);
      }
    );
  }, []);

  return provinces;
};

const useDistrictsData = () => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    CJOBS_API.get(
      `commons/ubigeo/country/region/subregion/${id_province}/`
    ).then((res) => {
      setDistricts(res.data);
      console.log(res);
    });
  }, []);

  return districts;
}; */

const Ubigeo = () => {
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/`).then((res) => {
      setCountries(res.data);
      console.log(res);
    });
  }, []);

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/1/`).then((res) => {
      setDepartments(res.data);
      console.log(res);
    });
  }, []);

  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`/commons/ubigeo/country/region/15/`).then((res) => {
      setProvinces(res.data);
      console.log(res);
    });
  }, []);

  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/region/subregion/15/`).then((res) => {
      setDistricts(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.currentTarget.value)}
        >
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.currentTarget.value)}
        >
          {departments.map((department) => {
            return (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            );
          })}
        </select>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.currentTarget.value)}
        >
          {provinces.map((province) => {
            return (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            );
          })}
        </select>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.currentTarget.value)}
        >
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
  );
};

export default Ubigeo;
