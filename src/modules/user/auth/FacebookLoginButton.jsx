import React, { useEffect } from "react";

// Component nút đăng nhập Facebook
const FacebookLoginButton = () => {
    useEffect(() => {
        // Nếu chưa có <div id="fb-root"> thì tạo mới và gắn vào body (yêu cầu của Facebook SDK)
        if (!document.getElementById("fb-root")) {
            const fbRoot = document.createElement("div");
            fbRoot.id = "fb-root";
            document.body.appendChild(fbRoot);
        }

        // Hàm này sẽ được gọi khi SDK Facebook được load xong
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "854729170194744",  // App ID của bạn trên Facebook Developer
                cookie: true,              // Lưu trạng thái đăng nhập bằng cookie
                xfbml: true,               // Kích hoạt render tự động các plugin (nếu có)
                version: "v16.0",          // Phiên bản Graph API
            });
            console.log("✅ Facebook SDK initialized.");
        };

        // Hàm load SDK Facebook nếu chưa được tải
        const loadFacebookSDK = () => {
            if (document.getElementById("facebook-jssdk")) return; // Nếu script đã tồn tại thì không làm gì

            const js = document.createElement("script");           // Tạo thẻ script mới
            js.id = "facebook-jssdk";                              // Đặt id cho script
            js.src = "https://connect.facebook.net/en_US/sdk.js"; // Link SDK Facebook

            const fjs = document.getElementsByTagName("script")[0]; // Tìm script đầu tiên trong trang
            fjs.parentNode.insertBefore(js, fjs);                   // Gắn script Facebook trước script đầu tiên
        };

        loadFacebookSDK(); // Gọi hàm tải SDK khi component được mount
    }, []);

    // Hàm xử lý khi người dùng bấm nút đăng nhập Facebook
    const handleFacebookLogin = () => {
        if (!window.FB) {
            console.error("❌ Facebook SDK chưa được tải.");
            return;
        }

        // Gọi popup đăng nhập của Facebook
        window.FB.login(
            (response) => {
                // Nếu đăng nhập thành công (có trả về authResponse)
                if (response.authResponse) {
                    console.log("✅ Đăng nhập Facebook thành công:", response);

                    // Lấy accessToken từ phản hồi
                    const accessToken = response.authResponse.accessToken;

                    // Gửi accessToken này về backend để xác minh và xử lý đăng nhập
                    fetch("http://localhost:8080/api/facebook-login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ accessToken }),
                    })
                        .then((res) => res.json())     // Chuyển kết quả thành JSON
                        .then((data) => {
                            console.log("📦 Phản hồi từ backend:", data); // Hiển thị phản hồi từ server
                        })
                        .catch((err) => {
                            console.error("🚫 Lỗi khi gửi token:", err);
                        });
                } else {
                    // Người dùng hủy hoặc không cấp quyền
                    console.log("🚫 Người dùng hủy đăng nhập hoặc không cấp quyền.");
                }
            },
            { scope: "public_profile,email" } // Yêu cầu quyền truy cập email và profile
        );
    };

    // JSX cho nút đăng nhập Facebook
    return (
        <button
            onClick={handleFacebookLogin} // Gọi hàm khi người dùng click
            className="w-18 h-18 rounded-full border border-gray-300 hover:ring-2 hover:ring-blue-500 transition duration-300 flex items-center justify-center cursor-pointer"
        >
            {/* Biểu tượng Facebook */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
            />
        </button>
    );
};

export default FacebookLoginButton;
