import React, { useState, useEffect } from 'react';
import { fetchUsers,deleteUser } from '../../api/userService'; // Import hàm gọi API
import { useNavigate } from 'react-router-dom'; // Import useNavigate
function UserMNG() {
  const [users, setUsers] = useState([]); // Khởi tạo state là mảng
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Khởi tạo navigate
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await deleteUser(userId); // Gọi API để xóa người dùng
        if (response.errCode === 0) {
          alert('User deleted successfully!');
          // Cập nhật danh sách người dùng sau khi xóa
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } else {
          alert(response.message || 'Failed to delete user.');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('An error occurred while deleting the user.');
      }
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers('ALL'); // Gọi API từ userService
        setUsers(Array.isArray(data) ? data : [data]); // Đảm bảo dữ liệu là mảng
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">User Management</h1>
      <button
        onClick={() => navigate('/adduser')} // Chuyển hướng đến trang thêm người dùng
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add User
      </button>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300 text-center">{user.id}</td>
                <td className="px-4 py-2 border border-gray-300">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"   onClick={() => navigate(`/edituser/${user.id}`)}>
                    Edit
                  </button>
                  <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={()=>handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserMNG;