import { API } from "./index";
import { USER_API } from "./endPoints";

interface ResendOTP {
  phone: string;
}

const postResend = (data: ResendOTP): Promise<string> => {
  return API.post(USER_API.RESEND_OTP, data);
};

export { postResend, ResendOTP };
