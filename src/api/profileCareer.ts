import { API } from "./index";
import { USER_API } from "./endPoints";

interface CareerInput {
  authorization: string;
  position: string;
  company_name: string;
  starting_from: string;
  ending_in: string;
}

const postCareer = (data: CareerInput): Promise<string> => {
  return API.post(USER_API.PROFILE_CAREER, data);
};

export { postCareer, CareerInput };
