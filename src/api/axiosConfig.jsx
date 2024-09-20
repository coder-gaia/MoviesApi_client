import axios from "axios";

export default axios.create({
  baseURL: "https://movies-app-client-side.onrender.com",
  headers: { "ngrok-skip-browser-warning": "true" },
});
