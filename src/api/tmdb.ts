import axios from "axios";
import {
  endpoints,
  RequestParams,
  ResponseTypes,
  SupportedEndpoints,
} from "./types";
import { replacePathParams } from "./utils";

export const createApiClient = (apiKey: string) => {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: apiKey,
    },
  });

  const apiClient = {} as {
    [K in SupportedEndpoints]: (
      params: RequestParams[K],
      signal?: AbortSignal
    ) => Promise<ResponseTypes[K]>;
  };

  Object.keys(endpoints).forEach((endpoint_) => {
    const endpoint = endpoint_ as SupportedEndpoints;

    apiClient[endpoint] = async (params, signal) => {
      const path = endpoints[endpoint];
      const { params: newParams, path: newPath } = replacePathParams(
        path,
        params
      );

      const { data } = await api.get(newPath, { params: newParams, signal });
      return data;
    };
  });
  return apiClient;
};
