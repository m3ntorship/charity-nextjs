import { create } from "axios";

 export const charityAPI = (lng) => {
  if (lng === "ar") {
    return create({
      baseURL: process.env.urlAr,
});
  } else {
    return create({
      baseURL: process.env.url,
    });
  }
};