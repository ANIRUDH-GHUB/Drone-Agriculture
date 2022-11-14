import axios, { AxiosResponse } from "axios";
import { path } from "../constants/ApiEndpoints";
import { SignupState } from "../model/interfaces";

export const getAllDrones = async () => {
  return await axios
    .get(path.getAllDrones)
    .then((res) => res)
    .catch((err) => err.response);
};
