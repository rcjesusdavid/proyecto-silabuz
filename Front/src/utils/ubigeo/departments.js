import CJOBS_API from "../consolejobsAPI";

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

export default useDepartmentsData;
