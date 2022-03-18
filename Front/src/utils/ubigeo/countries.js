import CJOBS_API from "../consolejobsAPI";
import { React, useState, useEffect } from "react";

const useCountriesData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    CJOBS_API.get(`commons/ubigeo/country/`).then((res) => {
      setCountries(res.data);
      console.log(res);
    });
  }, []);

  return countries;
};

export default useCountriesData;
