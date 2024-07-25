import { Key } from "swr";
import axios, { AxiosResponse } from "axios";

import { IPagination } from "@/interfaces/general";
import { IAccommodation } from "@/interfaces/accommodation";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export const getAccommodations = async (
  params: Key = {}
): Promise<AxiosResponse<IPagination<IAccommodation>>> => {
  const response: AxiosResponse = await axiosInstance({
    method: "get",
    url: `/accommodations`,
    params,
  });

  return response;
};
