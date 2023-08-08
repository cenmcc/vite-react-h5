import axios, { CreateAxiosDefaults, AxiosInstance,AxiosResponse } from "axios";
import { useUserStore } from "@/store";

export type ResponseBody<T = unknown> = {
  responseBody: T;
  responseCode: number;
  responseMessage: string;
};

function createService(config: CreateAxiosDefaults): AxiosInstance {
  const service = axios.create(config);
  service.interceptors.request.use(
    (config) => {
      const user = useUserStore.getState().user; // request中获取zustand状态
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response: AxiosResponse<any, any>) => {
      const res = response.data;
      return res;
    },
    (error) => {
      console.log("err" + error);
      return Promise.reject(error);
    }
  );
  return service;
}

const service = createService({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000,
});

async function getEle() {
  const res = await service.get<{
    responseCode: number;
    responseMessage: string;
    responseData: any;
  }>("/api/v1/ele");
}


export default service;
