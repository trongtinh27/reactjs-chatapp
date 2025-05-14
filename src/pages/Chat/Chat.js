import classNames from "classnames/bind";
import SlideBar from "~/components/SideBar";
import styles from "./Chat.module.scss";
import Conversation from "~/components/Conversation";
import ChatBox from "~/components/ChatBox";

const cx = classNames.bind(styles);
function Chat() {
  return (
    <div className={cx("container")}>
      <div className={cx("SlideBar")}>
        <SlideBar />
      </div>
      <div className={cx("messages")}>
        <Conversation />
      </div>
      <div className={cx("chat")}>
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;
