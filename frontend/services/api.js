import axios from "axios";

const API = axios.create({ baseURL: "https://e-commerce-17cg.onrender.com" });

API.interceptors.request.use(req => {
  const t = localStorage.getItem("token");
  if (t) req.headers.Authorization = `Bearer ${t}`;
  return req;
});

export default API;