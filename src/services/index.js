import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-m6.herokuapp.com/",
});

export default api;
