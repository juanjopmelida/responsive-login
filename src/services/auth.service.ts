import axios from "axios";

const API_URL = process.env.REACT_APP_VOT_API_URL;

export const login = (username: string, password: string) => {
  const uri: string = `${API_URL}/security/authentication/login`;

  return axios
    .post(uri, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
