import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const login = async (email) => {
  const response = await axios.post(`${API_URL}/login`, { email});
  console.log(response.data);
  return response.data;
};