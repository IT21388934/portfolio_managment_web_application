import axios from "axios";

const user = localStorage.getItem("userState");
const BASE_URL = "http://localhost:3000/api";

const token = user ? JSON.parse(user).currentUser.accessToken : "";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});
