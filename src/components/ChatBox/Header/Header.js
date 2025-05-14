import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { MoreV2Icon } from "~/components/Icons";
import styles from "./Header.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function Header({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("avatar-container")}>
          <div className={cx("avatar")}>
            <img
              src={
                data?.isGroup
                  ? data?.groupInfo.avatar
                  : data?.otherParticipant.avatarImg
              }
              alt="avatar"
              className={cx("avatar-image")}
            />
          </div>
          <span className={cx("name")}>
            {data?.isGroup
              ? data?.groupInfo.name
              : data?.otherParticipant.fullName}
          </span>
        </div>
        {data?.isGroup && (
          <div className={cx("more")}>
            <HeadlessTippy
              delay={[0, 300]}
              visible={isOpen}
              placement="top-start"
              interactive
              onClickOutside={() => {
                setIsOpen(false);
              }}
              render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx("more-container")}>
                  <div className={cx("item")}>
                    <span className={cx("item-wrapper")}>
                      <div className={cx("icon")}>
                        <MoreV2Icon />
                      </div>
                      <div className={cx("text")}>
                        <span>Thêm thành viên</span>
                      </div>
                    </span>
                  </div>
                  <div className={cx("item")}>
                    <span className={cx("item-wrapper")}>
                      <div className={cx("icon")}>
                        <MoreV2Icon />
                      </div>
                      <div className={cx("text")}>
                        <span>Xóa nhóm</span>
                      </div>
                    </span>
                  </div>
                </div>
              )}
            >
              <MoreV2Icon onClick={handleOpen} className={cx("more-icon")} />
            </HeadlessTippy>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
