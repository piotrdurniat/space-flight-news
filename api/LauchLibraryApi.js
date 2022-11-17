import axios from "axios";

const LaunchLibraryApi = axios.create({
  baseURL: "https://lldev.thespacedevs.com/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default LaunchLibraryApi;
