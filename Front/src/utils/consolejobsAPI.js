import axios from "axios";

const CJOBS_API = axios.create({
  baseURL: "https://app-console-jobs.herokuapp.com/api",
});

export default CJOBS_API;
