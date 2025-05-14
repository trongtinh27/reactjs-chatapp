import axios from "axios";
import { API_URL } from "~/utils/constants";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
// Biến để theo dõi nếu đang refresh token
let isRefreshing = false;
// Hàng đợi các requests đang chờ token mới
let failedQueue = [];

// Xử lý các requests trong hàng đợi
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi không phải 403 hoặc request đã thử refresh rồi
    if (
      !error.response ||
      error.response.status !== 403 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true; // Đánh dấu request đã thử refresh token

    if (isRefreshing) {
      // Nếu đang refresh token, thêm request vào hàng đợi
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return axiosClient(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    isRefreshing = true; // Đánh dấu đang refresh token

    try {
      // Gọi API refresh token
      const response = await axiosClient.post(
        `${API_URL}/auth/refresh`,
        {},
        {
          withCredentials: true,
        }
      );

      const { accessToken } = response.data;

      // Lưu accessToken mới vào localStorage
      localStorage.setItem("accessToken", accessToken);
      // Cập nhật header Authorization cho request gốc
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

      // Xử lý các requests trong hàng đợi
      processQueue(null, accessToken);

      // Gọi lại request gốc với accessToken mới
      return axiosClient(originalRequest);
    } catch (refreshError) {
      // Xử lý lỗi refresh token
      processQueue(refreshError, null);

      // Xóa accessToken trong localStorage
      localStorage.removeItem("accessToken");

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false; // Đánh dấu không còn đang refresh token
    }
  }
);

export default axiosClient;
