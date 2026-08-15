import axios from "axios";

export const API = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: { Authorization: `Barer ${import.meta.env.VITE_NOTEHUB_TOKIN}` },
});

