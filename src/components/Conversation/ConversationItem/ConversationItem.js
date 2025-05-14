import classNames from "classnames/bind";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi"; // hoặc 'en' nếu bạn muốn tiếng Anh

import styles from "./ConversationItem.module.scss";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);
dayjs.locale("vi"); // ngôn ngữ bạn muốn hiển thị
const cx = classNames.bind(styles);
function ConversationItem({ data, activeId }) {
  const isActive = activeId ? data?._id === activeId : false; // Kiểm tra xem id có khớp với id trong params không

  function formatMessageTime(time) {
    const now = dayjs();
    const sent = dayjs(time);
    const diffInHours = now.diff(sent, "hour");
    const diffInDays = now.diff(sent, "day");

    if (diffInHours < 1) return sent.fromNow().replace(" trước", ""); // "1 phút", "30 phút"
    if (diffInDays === 0) return sent.format("HH:mm"); // "09:00"
    if (diffInDays === 1) return "Hôm qua";
    if (diffInDays < 7) return `${diffInDays} ngày`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} tuần`;
    return sent.format("DD/MM/YYYY");
  }

  return (
    <div className={cx("container")}>
      <Link to={`/${data?._id}`}>
        <div className={cx("wrapper", { isActive })}>
          <div className={cx("item")}>
            <div className={cx("avatar")}>
              <img
                src={
                  data.isGroup
                    ? data.groupInfo?.avatar
                    : data.otherParticipant?.avatarImg
                }
                alt=""
                className={cx("img-avatar")}
              />
            </div>
            <div className={cx("content")}>
              <div className={cx("name")}>
                <span className={cx("name-text")}>
                  {data?.isGroup
                    ? data.groupInfo?.name
                    : data.otherParticipant?.fullName}
                </span>
              </div>
              <div className={cx("break")}></div>

              {data.lastMessage !== null ? (
                <div className={cx("last-message")}>
                  <span className={cx("last-message-text")}>
                    {data.lastMessage.content}
                  </span>

                  <span className={cx("dot-break")}>
                    <span> </span>
                    <span className={cx("dot")}> · </span>
                  </span>
                  <span className={cx("time")}>
                    {formatMessageTime(data.lastMessage.createdAt)}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ConversationItem;
