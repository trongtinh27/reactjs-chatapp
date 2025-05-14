import classNames from "classnames/bind";
import { useState, useRef, useEffect, useContext } from "react";
import Tippy from "@tippyjs/react";

import { useSocket } from "~/Context/SocketContext";
import { useUser } from "~/Context/UserContext";
import { AppContext } from "~/Context/AppContext";
import { ImageIcon } from "~/components/Icons";
import EmojiPicker, { Emoji } from "emoji-picker-react";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);
const DEFAULT_HEIGHT = 36;

function Input() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const socket = useSocket();
  const { user } = useUser();
  const { id } = useContext(AppContext);

  const emojiRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    // Tự resize textarea
    if (e.target.value === "") {
      e.target.style.height = "20px"; // khớp với min-height bạn đặt trong CSS
    } else if (e.target.scrollHeight > DEFAULT_HEIGHT) {
      e.target.style.height = "auto"; // Đặt lại chiều cao về auto để tính toán lại

      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  function isURL(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // giao thức (http hoặc https)
        "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" + // domain
        "localhost|" + // localhost
        "\\d{1,3}(\\.\\d{1,3}){3})" + // hoặc địa chỉ IP
        "(\\:\\d+)?" + // port (tùy chọn)
        "(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?" + // path (tùy chọn)
        "(\\?[;&a-zA-Z0-9%_+.~#=\\-]*)?" + // query string (tùy chọn)
        "(\\#[-a-zA-Z0-9_]*)?$", // fragment (tùy chọn)
      "i"
    );
    return pattern.test(str);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Cho phép xuống dòng bình thường
        return;
      }

      // Nếu không phải Shift + Enter, kiểm tra nội dung
      if (message.trim() !== "") {
        e.preventDefault(); // Ngăn xuống dòng

        // Kiểm tra xem nội dung có phải là URL hay không
        const checkType = isURL(message);

        const newMessage = {
          sender: user.id,
          content: message,
          type: checkType ? "link" : "text",
        };

        socket.emit("sendMessage", {
          conversationId: id,
          message: newMessage,
        });
        setMessage("");
        e.target.style.height = "20px"; // Đặt lại chiều cao về mặc định
      } else {
        // Ngăn Enter khi không có nội dung (tránh tạo dòng trống)
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setOpenEmoji(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("wrapper")} ref={emojiRef}>
          <div className={cx("icon-container")}>
            <span className={cx("icon-image")}>
              <input
                id="input-image"
                className={cx("input-image")}
                type="file"
                accept="image/*"
              />
              <Tippy
                content="Gửi ảnh có kích thước tối đa là 100mb"
                placement="top"
                delay={[0, 200]}
              >
                <label htmlFor="input-image">
                  <ImageIcon className={cx("icon")} />
                </label>
              </Tippy>
            </span>
          </div>
          <div className={cx("input")}>
            <textarea
              rows="1"
              type="text"
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpenEmoji(false)}
              className={cx("input-text")}
              placeholder="Nhập tin nhắn..."
            />
            <span
              className={cx("emoji-button")}
              onClick={() => setOpenEmoji(!openEmoji)}
            >
              <Emoji unified="1f642" size={22} />
            </span>

            {openEmoji && (
              <div className={cx("emoji-picker")}>
                <EmojiPicker open onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
