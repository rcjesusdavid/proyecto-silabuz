import CJOBS_API from "../consolejobsAPI";

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
};

export default useDistrictsData;
