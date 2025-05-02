import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../api/userService'; // Hàm gọi API để thêm người dùng

function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passwword: '',
    address: '',
    phonenumber: '',
    gender: '0', // Mặc định là 0 (Nam)
    roleId: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(formData); // Gọi API để thêm người dùng
      if (response.errCode === 0) {
        alert('User added successfully!');
        navigate('/getuser'); // Chuyển hướng về trang quản lý người dùng
      } else {
        setError(response.errMessage || 'Failed to add user');
      }
    } catch (err) {
      console.error('Error adding user:', err);
      setError('An error occurred while adding the user.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-8 bg-white rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Add New User</h2>
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
          <label>Passwword</label>
          <input
            type="password"
            name="password"
            value={formData.password}
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
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;