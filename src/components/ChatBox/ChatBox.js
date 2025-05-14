import classNames from "classnames/bind";
import styles from "./ChatBox.module.scss";
import Header from "./Header/Header";
import Chat from "./Chat/Chat";
import Input from "./Input";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "~/Context/AppContext";
import { useSocket } from "~/Context/SocketContext";
import { fetchGetConversationDetailAPI, fetchGetMessagesAPI } from "~/apis";

const cx = classNames.bind(styles);
function ChatBox() {
  const [conversationDetail, setConversationDetail] = useState(null);
  const [messages, setMessages] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    totalPage: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useContext(AppContext);
  const socket = useSocket();
  const bottomRef = useRef(null);
  const chatAreaRef = useRef(null);
  const paginationRef = useRef(pagination);

  useEffect(() => {
    paginationRef.current = pagination;
  }, [pagination]);

  // Fetch conversation details and messages
  useEffect(() => {
    if (!id) return;

    const resetAndFetch = async () => {
      // Reset
      setMessages([]);
      setPagination({
        page: 1,
        pageSize: 20,
        totalPage: 0,
      });

      setIsLoading(true);

      try {
        const detailRes = await fetchGetConversationDetailAPI(
          localStorage.getItem("accessToken"),
          id
        );

        if (detailRes.status !== 200) throw new Error("Failed to fetch detail");

        setConversationDetail(detailRes.detail);

        const msgRes = await fetchGetMessagesAPI(
          localStorage.getItem("accessToken"),
          id,
          1
        );

        if (msgRes.status !== 200) throw new Error("Failed to fetch messages");

        const {
          messages: newMessages,
          page,
          pageSize,
          totalPage,
        } = msgRes.data;

        const sortedMessages = [...newMessages].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMessages(sortedMessages);

        setPagination({
          page,
          pageSize,
          totalPage,
        });

        requestAnimationFrame(() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        });
      } catch (error) {
        console.error("Error fetching conversation data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    resetAndFetch();
  }, [id]);

  useEffect(() => {
    if (!id || pagination.page === 1) return;

    const fetchMoreMessages = async () => {
      try {
        setIsLoading(true);
        const res = await fetchGetMessagesAPI(
          localStorage.getItem("accessToken"),
          id,
          pagination.page
        );

        if (res.status !== 200) throw new Error("Failed to fetch");

        const { messages: newMessages } = res.data;

        const sorted = [...newMessages].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        setMessages((prev) => [...sorted, ...prev]);
      } catch (error) {
        console.error("Error loading more messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoreMessages();
  }, [pagination.page]);

  // Handle socket events
  useEffect(() => {
    if (!socket || !id) return;

    const joinConversation = () => {
      socket.emit("join-conversation", id);
    };

    const leaveConversation = () => {
      socket.emit("leave-conversation", id);
    };

    const handleNewMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      requestAnimationFrame(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    };

    joinConversation();
    socket.on("receive-message", handleNewMessage);

    return () => {
      leaveConversation();
      socket.off("receive-message", handleNewMessage);
    };
  }, [socket, id]);

  // Handle infinite scrolling
  useEffect(() => {
    const chatArea = chatAreaRef.current;
    if (!chatArea) return;

    const handleScroll = () => {
      const currentPagination = paginationRef.current;

      if (
        chatArea.scrollTop === 0 &&
        currentPagination.page < currentPagination.totalPage &&
        !isLoading
      ) {
        setPagination((prev) => ({
          ...prev,
          page: prev.page + 1,
        }));
      }
    };

    const debounceScroll = (callback, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(...args), delay);
      };
    };

    const debouncedHandleScroll = debounceScroll(handleScroll, 200);
    chatArea.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      chatArea.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <>
      <div key={conversationDetail?.id} className={cx("container")}>
        <div className={cx("header")}>
          <Header data={conversationDetail} />
        </div>
        <div className={cx("main")}>
          {/* Chat list */}
          <div
            ref={chatAreaRef}
            className={cx("chat-area")}
            style={{
              overflowY: "auto",
              height: "calc(100% - 60px)",
            }}
          >
            {isLoading && pagination.page > 1 && (
              <div className={cx("loading")}>Loading older messages...</div>
            )}
            <div className={cx("chat")}>
              {messages.map((message) => (
                <Chat key={message._id} type={message.type} data={message} />
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Input luôn ở dưới */}
          <div className={cx("input")}>
            <Input conversationId={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
