import axios from "axios";

const API = axios.create({
  headers: {},
  withCredentials: true,
});

export { API };
