import  axiosInstance  from "./axios";

const signup = async (signupData) => {
  try {
     const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;

  }
   catch (error) {
    console.log("signup -error",error);
    throw error;
  }
 
};
export default signup;