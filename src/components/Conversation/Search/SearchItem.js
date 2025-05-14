import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import { fetchGetConversationAPI } from "~/apis";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);
function SearchItem({ data }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetchGetConversationAPI(accessToken, data.id);
      if (response.status !== 201) {
        throw new Error("Failed to fetch conversations");
      }
      console.log(response);

      navigate(`/${response.conversation._id}`);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  return (
    <div className={cx("wrapper")} onClick={() => handleClick()}>
      <img className={cx("avatar")} src={data.avatar} alt={data.fullName} />
      <div className={cx("info")}>
        <span className={cx("full-name")}>{data.fullName}</span>
      </div>
    </div>
  );
}

export default SearchItem;
