import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import AuthForm from "~/components/AuthForm";

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("container")}>
      <AuthForm></AuthForm>
    </div>
  );
}

export default Login;
