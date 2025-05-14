import axios from 'axios';

const API_URL = 'http://localhost:8080/api';
// login
export const login = async (to) => {
  const response = await axios.post(`${API_URL}/send-email`, { to});
  console.log(response.data);
  return response.data;
};

// verify

export const verify = async (email, otp) => {
  const response = await axios.post(`${API_URL}/verify-email`, { email, otp });
  console.log(response.data);
  return response.data;
}