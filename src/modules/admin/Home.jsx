import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
        {user ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Chào mừng, {user.name}!
            </h1>
            <p className="text-gray-600 mb-6">
              Đây là trang chủ của bạn. Bạn có thể bắt đầu bằng cách khám phá các tính năng dưới đây.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Link
                to="/dashboard"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/users"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Quản Lý Người Dùng
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Đăng Xuất
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Chào mừng đến với ứng dụng của chúng tôi!
            </h1>
            <p className="text-gray-600 mb-6">
              Vui lòng đăng nhập để truy cập các tính năng.
            </p>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Đăng Nhập
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;