import classNames from "classnames/bind";

import {
  MessageIcon,
  MarketPlaceIcon,
  MessageRequestsIcon,
  ArchivedIcon,
} from "../Icons";
import NavItem from "./Item";
import styles from "./SideBar.module.scss";
import User from "./User";

const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("nav-wrapper")}>
          <NavItem
            icon={<MessageIcon />}
            href="/"
            isActive={true}
            message={"Tin nhắn"}
          />
          <NavItem
            icon={<MarketPlaceIcon />}
            href="#"
            message={"Marketplace"}
          />
          <NavItem
            icon={<MessageRequestsIcon />}
            href="#"
            message={"Tin nhắn chờ"}
          />
          <NavItem icon={<ArchivedIcon />} href="#" message={"Lưu trữ"} />
        </div>
        <div className={cx("line-wrapper")}>
          <div className={cx("line")}></div>
        </div>
        <div className={cx("profile-wrapper")}>
          <User />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
