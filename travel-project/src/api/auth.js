import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_URL_BE;

export const login = async (data) => {
    try {
        const {
            email,
            password
        } = data;

        const response = await axios.post(`${baseUrl}/auth/login`, {
            email, password
        })
        const token = response.data.result.accessToken;
        if (token) {
            localStorage.setItem("accessToken", token);
        }
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw new Error('Đã có lỗi khi đăng nhập. Vui lòng thử lại!');
    }
};

export const register = async (data) => {
    try {
        const {
            fullName,
            email,
            password,
            address,
            phoneNumber
        } = data;
        const response = await axios.post(`${baseUrl}/auth/register`, {
            fullName,
            email,
            password,
            address,
            phoneNumber
        })
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw new Error('Tạo tài khoản không thành công. Vui lòng thử lại!');
    }
}