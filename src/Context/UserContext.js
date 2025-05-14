import { createContext, useState, useEffect, useContext } from "react";

import { fetchLoginAPI, fetchGetProfileAPI, fetchRegisterAPI } from "~/apis";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const response = await fetchGetProfileAPI(accessToken);

          if (response.status === 200) {
            setUser(response.profile);
          } else {
            setError("Failed to check login status.");
          }
        }
      } catch (error) {
        setError(error.status);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchLoginAPI(email, password);

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.accessToken);

        try {
          const profileResponse = await fetchGetProfileAPI(
            response.accessToken
          );

          if (profileResponse.status === 200) {
            setUser(profileResponse.profile);
            setLoading(false);
            return true;
          }
        } catch (error) {
          setError("Failed to fetch user profile.");
          setLoading(false);
          return false;
        }
      } else {
        setError("Đăng nhập không thành công.");
        setLoading(false);
        return false;
      }
    } catch (error) {
      if (
        (error?.response && error.response?.status === 401) ||
        error?.response?.status === 422
      ) {
        setError("Tài khoản hoặc mật khẩu không đúng.");
      } else {
        setError(error.status || "Có lỗi xảy ra khi đăng nhập.");
      }

      setLoading(false);
      return false;
    }
  };

  const register = async (email, password, confirmPassword, fullName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchRegisterAPI(
        email,
        password,
        confirmPassword,
        fullName
      );

      if (response.status === 201) {
        localStorage.setItem("accessToken", response.accessToken);

        try {
          const profileResponse = await fetchGetProfileAPI(
            response.accessToken
          );

          if (profileResponse.status === 200) {
            setUser(profileResponse.profile);
            setLoading(false);
            return true;
          }
        } catch (error) {
          setError("Failed to fetch user profile.");
          setLoading(false);
          return false;
        }
      } else {
        setError("Đăng ký không thành công.");
        setLoading(false);
        return false;
      }
    } catch (error) {
      if (
        (error?.response && error.response?.status === 401) ||
        error?.response?.status === 422
      ) {
        setError("Tài khoản hoặc mật khẩu không đúng.");
      } else {
        setError(error.status || "Có lỗi xảy ra khi đăng ký.");
      }

      setLoading(false);
      return false;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
