import { API } from "./index";
import { USER_API } from "./endPoints";

interface EducationInput {
  authorization: string;
  school_name: string;
  graduation_name: string;
}

const postEducation = (data: EducationInput): Promise<string> => {
  return API.post(USER_API.PROFILE_EDUCATION, data);
};

export { postEducation, EducationInput };
