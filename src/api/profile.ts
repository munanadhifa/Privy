import { API } from "./index";
import { USER_API } from "./endPoints";

interface ProfileInput {
  authorization: string;
  name: string;
  gender: string;
  birthday: string;
  hometown: string;
  bio: string;
}

const postProfile = (data: ProfileInput): Promise<string> => {
  return API.post(USER_API.PROFILE, data);
};

export { postProfile, ProfileInput };
