import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/admin/Home';
import Login from '../modules/admin/auth/Login';
import Dashboard from '../modules/admin/dashboard/Dashboard';
import AddUser from '../modules/admin/user/AddUser';
import EditUser from '../modules/admin/user/EditUser';
import UserMng from '../modules/admin/user/UserMNG';
function AppRoutesAdmin() {
  return (
      <Routes>
        <Route path="admin/" element={<Home />} /> {/* Trang Home là mặc định */}
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/users" element={<UserMng />} />
        <Route path="admin/users/add" element={<AddUser />} />
        <Route path="admin/users/edit/:id" element={<EditUser />} />
        <Route path="admin/" element={<Login />} /> {/* Trang mặc định */}
      </Routes>
  );
}

export default AppRoutesAdmin;