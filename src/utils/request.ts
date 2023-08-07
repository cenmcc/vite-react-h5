import axios from "axios";
import { useUserStore } from "@/store";
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const user = useUserStore.getState().user // request中获取zustand状态
    return config;
  },
  (error) => {
    console.log(error); 
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
