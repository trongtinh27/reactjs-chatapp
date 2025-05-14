import classNames from "classnames/bind";

import styles from "./Conversation.module.scss";
import Tippy from "@tippyjs/react";
import { NewChatIcon } from "../Icons";
import Search from "./Search";
import ConversationItem from "./ConversationItem";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "~/Context/AppContext";
import { useSocket } from "~/Context/SocketContext";
import { fetchGetUserConversationsAPI } from "~/apis";
import NewChatModal from "../NewChatModal";

const cx = classNames.bind(styles);
function Conversation() {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useContext(AppContext);
  const socket = useSocket();
  const [conversations, setConversations] = useState([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const fetchGetUserConversations = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetchGetUserConversationsAPI(accessToken);
      if (response.status !== 200) {
        throw new Error("Failed to fetch conversations");
      }

      setConversations(response.conversations.data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGetUserConversations();

      if (socket) {
        // Sửa thành join-conversations để khớp với server
        socket.emit("join-conversations");

        const handleConversationUpdate = (update) => {
          setConversations((prev) => {
            const existingIndex = prev.findIndex(
              (item) => item._id === update._id
            );

            if (existingIndex >= 0) {
              const updated = [...prev];
              const [existing] = updated.splice(existingIndex, 1);
              return [
                {
                  ...existing,
                  lastMessage: update.lastMessage,
                  updatedAt: update.updatedAt,
                },
                ...updated,
              ];
            } else {
              fetchGetUserConversations();
              return prev;
            }
          });
        };

        socket.on("conversation-updated", handleConversationUpdate);

        return () => {
          socket.off("conversation-updated", handleConversationUpdate);
        };
      }
    };

    fetchData();
  }, [socket]);

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <div className={cx("title")}>
            <h1>Đoạn chat</h1>
          </div>
          <div className={cx("new-chat")} onClick={handleOpenModal}>
            <Tippy
              delay={[100, 200]}
              content="Soạn"
              arrow={true}
              placement="bottom"
            >
              <div className={cx("icon")}>
                <NewChatIcon />
              </div>
            </Tippy>
          </div>
        </div>
        <div className={cx("search")}>
          <Search />
        </div>
        <div className={cx("list")}>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation._id}
              data={{
                ...conversation,
                lastMessage: conversation.lastMessage || {
                  content: "",
                  type: "text",
                  createdAt: conversation.updatedAt,
                },
              }}
              activeId={id}
            />
          ))}
        </div>
      </div>
      <NewChatModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Conversation;
