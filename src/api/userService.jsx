import axios from 'axios';

const API_URL = 'http://localhost:8080/api/get-all-users'; // Thay bằng URL API thực tế của bạn

// Hàm lấy danh sách người dùng
export const fetchUsers = async (inputId) => {
  try {
    const response = await axios.get(`${API_URL}?id=${inputId}`); // Gọi API với ID người dùng
    console.log('Fetched users:', response); // In ra dữ liệu người dùng
    return response; // Trả về dữ liệu người dùng
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Ném lỗi để xử lý ở component
  }
};

// Bạn có thể thêm các hàm API khác ở đây, ví dụ:
// export const createUser = async (userData) => { ... };
// export const deleteUser = async (userId) => { ... };