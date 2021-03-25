import axios from "axios";
const KEY = "AIzaSyA6cayWVZAgtFBuF1aAYyPV8ucVrKYuhMA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
  },
});
