import { CORE_API_URL } from "../utils/constant";

//User
export const USER_API = {
  REGISTER: `${CORE_API_URL}/v1/register`,
  LOGIN: `${CORE_API_URL}/v1/oauth/sign_in`,
  RESEND_OTP: `${CORE_API_URL}/v1/register/otp/request`,
  OTP_MATCH: `${CORE_API_URL}/v1/register/otp/match`,
};
