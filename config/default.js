const config = {
    UserApiURL: process.env.NODE_CONFIG__USER_API_URL || "http://localhost:8080",
    UserApiAuth: process.env.NODE_CONFIG__USER_API_AUTH || "Basic YWRtaW46cGFzc3dvcmQ="
};

module.exports = config;
