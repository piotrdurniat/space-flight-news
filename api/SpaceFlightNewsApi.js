import axios from "axios";

const SpaceFlightNewsApi = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default SpaceFlightNewsApi;
