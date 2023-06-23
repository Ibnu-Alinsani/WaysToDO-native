// import { KontenbaseClient } from "@kontenbase/sdk"

// export const kontenbase = new KontenbaseClient({
//     apiKey: "f704ba60-8969-43d1-b17f-86f90fca2add"
// })

import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/f704ba60-8969-43d1-b17f-86f90fca2add",
});

// axios.post(
//   "https://api.kontenbase.com/query/api/v1/f704ba60-8969-43d1-b17f-86f90fca2add/api/getKey" , {
//     email : 'ibnualinsani23@gmail.com',
//     password: '220104ibnu'
//   }
// ).then(res => {
//     axios.defaults.headers["x-api-key"] = res.data.API
// });
