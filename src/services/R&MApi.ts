import axios, { AxiosResponse } from 'axios';

const apiURL: string = process.env.API_URL as string;

export const api = axios.create({
  baseURL: apiURL,
});

export default {
  URL,
  getCharacterInfo (route = ''): Promise<AxiosResponse> {
    return api.get(`character${route}`);
  },
};
