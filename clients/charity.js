import { create } from "axios";

export const charityAPI = create({
  baseURL: process.env.url,
});
