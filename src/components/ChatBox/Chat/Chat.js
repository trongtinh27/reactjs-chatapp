import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";

import styles from "./Chat.module.scss";
import dayjs from "dayjs";
import { useUser } from "~/Context/UserContext";

const cx = classNames.bind(styles);
function Chat({ type = "text", data }) {
  const { user } = useUser();
  const isSender = data.sender[0]._id === user.id; // Kiểm tra xem người gửi có phải là người dùng hiện tại không

  function formatMessageTime(time) {
    const sent = dayjs(time);

    return sent.format("HH:mm DD/MM/YYYY");
  }

  return (
    <>
      <div className={cx("container", isSender ? "isSender" : "isReceiver")}>
        <span className={cx("avatar-container")}>
          <Tippy
            delay={[0, 200]}
            content={data.sender[0].fullName}
            placement="bottom"
          >
            <img
              className={cx("avatar")}
              alt={data.sender[0].fullName}
              src={data.sender[0].avatarImg}
            />
          </Tippy>
        </span>
        <Tippy
          delay={[0, 200]}
          content={formatMessageTime(data.createdAt)}
          placement={isSender ? "left" : "right"}
        >
          <div
            className={cx(
              "text-container",
              isSender ? "text-sender" : "text-receiver"
            )}
          >
            {type === "text" && (
              <p className={cx("chat-content")}> {data.content}</p>
            )}
            {type === "link" && (
              <a
                href="http://google.com"
                className={cx("chat-content")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.content}
              </a>
            )}
            {type === "img" && (
              <img
                className={cx("chat-content")}
                alt="img"
                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/476501930_2493536937655333_6840220786704543412_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=72k7jvAe9JwQ7kNvwECd9HN&_nc_oc=AdmezrhP1DjilbzFDmJv54sqs0yct6hvOr3tuSbrXsGF6pt-dBMWunC6SHSC1zmTHiU&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=b8eAirqGtxXLjGPAxL_R9A&oh=00_AfF5imamGpVeQ_ohpSP_S4O3y6XJO7H8nDoEcvfZuscvvQ&oe=67FB8A06"
              />
            )}
          </div>
        </Tippy>
      </div>
    </>
  );
}

export default Chat;
