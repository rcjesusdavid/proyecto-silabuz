import CJOBS_API from "../consolejobsAPI";

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

export default useProvincesData;
