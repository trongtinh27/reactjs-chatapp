import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";
import { useEffect, useState } from "react";
import useDebounce from "~/hooks/useDebounce";
import { fetchSearchApi } from "~/apis";
import SearchItem from "./SearchItem";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith(" ")) {
      setSearchValue(value);
    }
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchSearchResult = async () => {
      try {
        const response = await fetchSearchApi(debounce);
        if (response.status !== 200) {
          throw new Error("Failed to fetch search results");
        }
        setSearchResult(response.users);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchSearchResult();
  }, [debounce]);

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      zIndex={99}
      placement="bottom"
      interactive
      render={(attrs) => (
        <div>
          <ul className={cx("search-result")} tabIndex="-1" {...attrs}>
            {searchResult.map((result, index) => (
              <SearchItem
                key={result.id || `result-${index}`} // Dùng index nếu id không tồn tại
                data={result}
                // onClick={() => handleAccountClick(result.nickname)}
              />
            ))}
          </ul>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("icon")}>
            <SearchIcon />
          </div>
          <input
            type="search"
            className={cx("input")}
            placeholder="Tìm kiếm người dùng"
            autoComplete="off"
            tabIndex="0"
            onChange={handleInputChange}
            onFocus={() => setShowResult(true)}
          />
        </div>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
