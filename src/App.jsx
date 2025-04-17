import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './modules/auth/login';
import Dashboard from './modules/dashboard/Dashboard';
import UserMNG from './modules/user/UserMNG'; // Import getUser component
import AddUser from './modules/user/AddUser';
import EditUser from './modules/user/EditUser'; // Import trang chỉnh sửa người dùng
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getuser" element={<UserMNG />} />
        <Route path="/adduser" element={<AddUser />} /> {/* Route thêm người dùng */}
        <Route path="/edituser/:id" element={<EditUser />} /> {/* Route chỉnh sửa người dùng */}
      </Routes>
  );
}

export default App;