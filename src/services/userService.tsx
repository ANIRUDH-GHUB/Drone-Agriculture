import axios, { AxiosResponse } from "axios";
import { path } from "../constants/ApiEndpoints";
import { SignupState } from "../model/interfaces";

export const singup = async (user: SignupState) => {
  const body = {
    username: user.email,
    password: user.password,
    email: user.email,
    first_name: user.name,
  };
  return await axios
    .post(path.register, body)
    .then((res) => res)
    .catch((err) => err.response);
};

export const login = async (user: SignupState) => {
  const body = {
    username: user.email,
    password: user.password,
  };
  return await axios
    .post(path.login, body)
    .then((res) => res)
    .catch((err) => err.response);
};
