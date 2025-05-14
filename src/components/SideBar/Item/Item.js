import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function NavItem({ icon, href, isActive, message }) {
  const activeClass = isActive ? "active" : "";
  return (
    <span className={cx("container")}>
      <Tippy
        delay={[0, 100]}
        offset={[0, 0]}
        content={message}
        placement="right"
        arrow={false}
      >
        <div className={cx("wrapper", activeClass)}>
          <Link to={`${href}`} className={cx("nav-link")}>
            <div className={cx("icon")}>{icon}</div>
          </Link>
        </div>
      </Tippy>
    </span>
  );
}

export default NavItem;
