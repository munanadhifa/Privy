import { API } from "./index";
import { USER_API } from "./endPoints";

interface MatchInput {
  user_id: string;
  otp_code: string;
}

const postOtp = (data: MatchInput): Promise<string> => {
  return API.post(USER_API.OTP_MATCH, data);
};

export { postOtp, MatchInput };
