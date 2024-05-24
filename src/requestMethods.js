import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTcyYTA3ODY5OWJjOWZkMmU5ZjE4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzM4NzAzMCwiZXhwIjoxNjkzNjQ2MjMwfQ.l4rbOasHmkQDX8UHMTAFTtwMXKYTTIw9ydSXkVfpwtc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
