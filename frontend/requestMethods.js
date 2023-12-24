import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg3YjliMjBjNTZjOTdlZDdhNjYxZGEiLCJuYW1lIjoiUnVtZXNoIiwiZW1haWwiOiJzaXJpd2FyZGhhbmFydW1lc2hAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzAzMzk1NDkyLCJleHAiOjE3MDM0ODE4OTJ9.L5XM-XXZ5eZXcU-4c42drhV_m8-TA9QoOPjt0EwC1i8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});
