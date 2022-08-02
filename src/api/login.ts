import { API } from "./index";
import { USER_API } from "./endPoints";

interface LoginInput {
  phone: string;
  password: string;
  latlong: string;
  device_token: string;
  device_type: string;
}

const postLogin = (data: LoginInput): Promise<string> => {
  return API.post(USER_API.LOGIN, data);
};

export { postLogin, LoginInput };
