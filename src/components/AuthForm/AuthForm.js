import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./AuthForm.module.scss";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const cx = classNames.bind(styles);
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={cx("container")}>
      {isLogin ? <LoginForm /> : <RegisterForm></RegisterForm>}
      <footer className={cx("footer")}>
        <span onClick={handleToggleForm} className={cx("link")}>
          {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}
        </span>
        {/* <Link to={isLogin ? "/register" : "/login"} className={cx("link")}>
          {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}
        </Link>{" "}
        <Link to={isLogin ? "/register" : "/login"} className={cx("link")}>
          {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}
        </Link> */}
      </footer>
    </div>
  );
}

export default AuthForm;
