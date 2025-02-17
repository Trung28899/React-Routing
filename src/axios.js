import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.cypress.io",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
instance.defaults.headers.post["Content-Type"] = "application/json";

// instance.interceptors.request...

export default instance;
