import React, { useEffect } from "react";

const FacebookLoginButton = () => {
    useEffect(() => {
        const loadFacebookSDK = () => {
            if (document.getElementById("facebook-jssdk")) return;

            const js = document.createElement("script");
            js.id = "facebook-jssdk";
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            js.onload = () => {
                // Khởi tạo Facebook SDK sau khi tải xong
                window.fbAsyncInit = function () {
                    if (window.FB) {
                        window.FB.init({
                            appId: "529216020262493", // Thay bằng App ID của bạn
                            cookie: true,
                            xfbml: true,
                            version: "v16.0", // Đảm bảo sử dụng phiên bản hợp lệ
                        });
                        console.log("Facebook SDK initialized successfully.");
                    } else {
                        console.error("Facebook SDK không được tải.");
                    }
                };
            };

            const fjs = document.getElementsByTagName("script")[0];
            fjs.parentNode.insertBefore(js, fjs);
        };

        loadFacebookSDK();
    }, []);

    const handleFacebookLogin = () => {
        if (!window.FB) {
            console.error("Facebook SDK chưa được tải.");
            return;
        }

        window.FB.login(
            function (response) {
                if (response.authResponse) {
                    console.log("Facebook Login Success:", response);
                    const accessToken = response.authResponse.accessToken;

                    // Gửi Access Token đến backend
                    fetch("http://localhost:8080/api/facebook-login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ accessToken }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log("Backend Response:", data);
                        });
                } else {
                    console.log("Facebook Login Failed");
                }
            },
            { scope: "public_profile,email" }
        );
    };

    return (
        <button
            onClick={handleFacebookLogin}
            className="w-18 h-18 rounded-full border border-gray-300 hover:ring-2 hover:ring-blue-500 transition duration-300 flex items-center justify-center cursor-pointer"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
            />
        </button>
    );
};

export default FacebookLoginButton;