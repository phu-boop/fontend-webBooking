import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './modules/auth/login';
import Dashboard from './modules/dashboard/Dashboard';
import UserMNG from './modules/user/UserMNG'; // Import getUser component
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getuser" element={<UserMNG />} />
      </Routes>
  );
}

export default App;