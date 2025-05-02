import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser } from '../../../api/userService'; // Import API

function EditUser() {
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '', // ID người dùng
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phonenumber: '',
    gender: '0', // Mặc định là 0 (Nam)
    roleId: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUserById(id); // Gọi API để lấy thông tin người dùng
        if (response.errCode === 0) {
          const user = response.user;
          // Thay thế các giá trị undefined bằng chuỗi rỗng
          const sanitizedUser = {
            id: user.id || '',
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            address: user.address || '',
            phonenumber: user.phonenumber || '',
            gender: user.gender !== null ? user.gender.toString() : '0', // Chuyển đổi gender thành chuỗi
            roleId: user.roleId || '',
          };
          setFormData(sanitizedUser); // Gán dữ liệu đã xử lý vào form
        } else {
          setError(response.message || 'Failed to fetch user data.');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setError('Failed to fetch user data.');
      }
    };
  
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(formData); // Gọi API để cập nhật người dùng
      if (response.errCode === 0) {
        alert('User updated successfully!');
        navigate('/getuser'); // Chuyển hướng về trang quản lý người dùng
      } else {
        setError(response.message || 'Failed to update user.');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setError('An error occurred while updating the user.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-8 bg-white rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Edit User</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Phone Number</label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Role</label>
          <input
            type="text"
            name="roleId"
            value={formData.roleId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Update User
        </button>
      </form>
    </div>
  );
}

export default EditUser;