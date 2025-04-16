import React from 'react';
import  UserMNG  from '../user/UserMNG'; // Import UserMNG component
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 text-white py-4 shadow">
        <h1 className="text-center text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <h2 className="text-xl font-semibold text-gray-700">Welcome to the Dashboard!</h2>
        <p className="mt-2 text-gray-600">
          This is your main dashboard where you can manage your application.
        </p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go to Profile
          </button>
        </div>
        <div>
            <h2 className="text-xl font-semibold text-gray-700 mt-6">User Management</h2>
            <UserMNG /> {/* Render UserMNG component here */}
        </div>
      </main>
      <footer className="w-full bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-600">© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;