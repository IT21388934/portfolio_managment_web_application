import axios from "axios";

const user = localStorage.getItem("userState");
const BASE_URL = "http://localhost:3000/api";

const token = user ? JSON.parse(user).currentUser.accessToken : "";
// console.log("token", token);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
