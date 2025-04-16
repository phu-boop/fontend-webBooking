import axios from 'axios';

const API_URL = 'http://localhost:8080/api/get-all-users'; // URL API thực tế của bạn

// Hàm lấy danh sách người dùng
export const fetchUsers = async (inputId) => {
  try {
    const response = await axios.get(`${API_URL}?id=${inputId}`); // Gọi API với ID người dùng
    console.log('Fetched users:', response.data); // In ra dữ liệu người dùng
    if (response.data.errCode === 0) {
      return response.data.users; // Trả về dữ liệu người dùng
    } else {
      throw new Error(response.data.message || 'Failed to fetch users');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Ném lỗi để xử lý ở component
  }
};