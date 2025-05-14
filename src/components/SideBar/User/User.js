import { useState } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import { useUser } from "~/Context/UserContext";

import {
  BottomArrowIcon,
  SettingIcon,
  RestrictedAccountIcon,
  SaveHouseIcon,
  FamilyIcon,
  HelpIcon,
  ReportIcon,
  MoreIcon,
  LogoutIcon,
} from "~/components/Icons";
import styles from "./User.module.scss";

const cx = classNames.bind(styles);
function User() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUser();

  return (
    <div>
      <HeadlessTippy
        delay={[0, 300]}
        visible={isOpen}
        placement="top-start"
        interactive
        onClickOutside={() => {
          setIsOpen(false);
        }}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx("setting-container")}>
            <BottomArrowIcon className={cx("setting-arrow")} />
            <div className={cx("setting-wrapper")}>
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <SettingIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Tùy chọn</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <RestrictedAccountIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Tài khoản bị hạn chế</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <SaveHouseIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Quyền riêng tư và an toàn</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />

              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <FamilyIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Trung tâm gia đình</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <HelpIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Trợ giúp</span>
                  </div>
                </span>
              </div>
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <ReportIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Báo cáo sự cố</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <MoreIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Điều khoản</span>
                  </div>
                </span>
              </div>
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <MoreIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Chính sách quyền riêng tư</span>
                  </div>
                </span>
              </div>
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <MoreIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Chính sách về cookie</span>
                  </div>
                </span>
              </div>
              <hr className={cx("line-break")} />
              <div className={cx("item")}>
                <span className={cx("item-wrapper")}>
                  <div className={cx("icon")}>
                    <LogoutIcon />
                  </div>
                  <div className={cx("text")}>
                    <span>Đăng xuất</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        )}
      >
        <Tippy
          delay={[0, 300]}
          offset={[0, 0]}
          content={user?.fullName}
          placement="left"
          arrow={false}
        >
          <div
            className={cx("container")}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className={cx("wrapper")}>
              <span className={cx("avatar")}>
                <img
                  src={user?.avatar}
                  alt={user?.fullName}
                  className={cx("avatar-img")}
                />
              </span>
            </div>
          </div>
        </Tippy>
      </HeadlessTippy>
    </div>
  );
}

export default User;
