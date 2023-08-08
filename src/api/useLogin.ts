import request, { type ResponseBody } from "../utils/request";
import {} from "@/api/useLogin";

export interface LoginApi {
  sendCode: (phone: string) => Promise<ResponseBody>;
  phoneLogin: (data: {
    phone: string;
    msgCode: string;
    msgCategory: string;
    channelTpCd: string;
    agentEmployeeId?: string;
  }) => Promise<ResponseBody>;
  passwordLogin: (data: {
    phone: string;
    password: string;
  }) => Promise<ResponseBody>;
}

export const useLoginApi = (): LoginApi => {
  return {
    sendCode: (phone) => request.get(`/sms/send/sm/COMMON_TEMPLATE/${phone}`),
    phoneLogin: (params) => request.post("/login/sms", params),
    passwordLogin: (params) => request.post("/login/password", params),
  };
};
