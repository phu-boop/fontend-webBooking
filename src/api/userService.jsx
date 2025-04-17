import axios from 'axios';
const BASE_API_URL = 'http://localhost:8080/api';
const API_URL_GET_ALL = `${BASE_API_URL}/get-all-users`; // URL API cụ thể
const API_URL_CRETE_USER = `${BASE_API_URL}/create-new-user`; // URL API tạo người dùng
const API_URL_DELETE = `${BASE_API_URL}/delete-user`;
const API_URL_EDIT = `${BASE_API_URL}/edit-user`;
const BASE_API_PUT = `${BASE_API_URL}/put-user`;
// Hàm lấy danh sách người dùng
export const fetchUsers = async (inputId) => {
  try {
    const response = await axios.get(`${API_URL_GET_ALL}?id=${inputId}`); // Gọi API với ID người dùng
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

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL_CRETE_USER}`, userData);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Ném lỗi để xử lý ở component
  }
};

export const deleteUser = async (userId) =>{
  try{
    const response = await axios.get(`${API_URL_DELETE}?id=${userId}`);
    return response.data;
  }catch (e){
    console.log('Error call api:', e)
    throw e;
  }
}
// Hàm lấy thông tin người dùng theo ID
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL_EDIT}?id=${userId}`);
    return response.data; // Trả về dữ liệu người dùng
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Hàm cập nhật thông tin người dùng
export const updateUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_API_PUT}`, userData);
    return response.data; // Trả về kết quả cập nhật
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};