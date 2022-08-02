import { API } from "./index";
import { USER_API } from "./endPoints";

interface RegisterInput {
  phone: string;
  password: string;
  country: string;
  latlong: string;
  device_token: string;
  device_type: string;
}

const postRegister = (data: RegisterInput): Promise<string> => {
  return API.post(USER_API.REGISTER, data);
};

export { postRegister, RegisterInput };
