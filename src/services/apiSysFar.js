import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("sysfar");
    }
    return error;
  }
);

export const apiSysFar = axios.create({
  baseURL: "http://mockupapi.sysfar.com.br",
});
