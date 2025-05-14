import classNames from "classnames/bind";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "~/Context/UserContext";

import styles from "./RegisterForm.module.scss";

const cx = classNames.bind(styles);
function RegisterForm() {
  const [formData, setFormData] = useState({});

  const { loading, error, register } = useUser();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.fullName
    ) {
      console.error("Please fill in all fields.");
      return;
    }

    const success = await register(
      formData.email,
      formData.password,
      formData.confirmPassword,
      formData.fullName
    );
    console.log(success);

    if (success) {
      navigate("/");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <h1 className={cx("title")}>Đăng ký tài khoản mới.</h1>
        <form className={cx("form")} onSubmit={handleRegister}>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className={cx("input")}
            placeholder="Nhập email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className={cx("input")}
            placeholder="Nhập mật khẩu"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            className={cx("input")}
            placeholder="Nhập lại mật khẩu"
          />
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            className={cx("input")}
            placeholder="Nhập tên hiển thị"
          />

          {error && (
            <div className={cx("notification")}>
              <span className={cx("text")}>Email đã tồn tại</span>
            </div>
          )}

          <button type="submit" className={cx("btn")}>
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
