import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "~/Context/UserContext";

import styles from "./LoginForm.module.scss";

const cx = classNames.bind(styles);
function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.error("Please fill in all fields.");
      return;
    }

    const success = await login(formData.email, formData.password);
    console.log(success);

    if (success) {
      navigate("/");
    } else {
      console.error("Login failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <h1 className={cx("title")}>Kết nối với những người bạn yêu quý.</h1>
        <form className={cx("form")} onSubmit={handleLogin}>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className={cx("input")}
            placeholder="Nhập tài khoản hoặc email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            type="password"
            className={cx("input")}
            placeholder="Nhập mật khẩu"
          />

          {error && (
            <div className={cx("notification")}>
              <span className={cx("text")}>{`${error}`}</span>
            </div>
          )}

          <button type="submit" className={cx("btn")}>
            {loading ? "Đang tải..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
