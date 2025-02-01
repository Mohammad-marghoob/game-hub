import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2aab33f3cd57409cb3bb87aac76e7341",
  },
});
