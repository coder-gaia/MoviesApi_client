import axios from "axios";

export default axios.create({
  baseURL: "https://movies-app-client-side.onrender.com/api/v1/movies",
  headers: { "ngrok-skip-browser-warning": "true" },
});
