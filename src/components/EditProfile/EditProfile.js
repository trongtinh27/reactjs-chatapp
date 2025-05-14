import classNames from "classnames/bind";
import Modal from "react-modal";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "../Icons";

import styles from "./EditProfile.module.scss";

const cx = classNames.bind(styles);
function EditProfile({ onClose }) {
  // State
  const [inputAvatar, setInputAvatar] = useState();
  const [inputTikTokID, setInputTikTokID] = useState();
  const [inputFullName, setInputFullName] = useState();
  const [inputBio, setInputBio] = useState();

  const [loading, setLoading] = useState(false);
  const [bntLoading, setBtnLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [isError, setIsError] = useState(false);

  //   Ref
  const inputRef = useRef(null);

  return (
    <>
      <Modal
        isOpen={true}
        overlayClassName="Overlay"
        ariaHideApp={false}
        className={cx("wrapper")}
      >
        <div className={cx("mark")}></div>
        <div className={cx("content")}>
          <div className={cx("container")}>
            <div className={cx("center")}>
              <section className={cx("edit-profile")}>
                <div className={cx("popup")}>
                  <div className={cx("header-container")}>
                    <h1 className={cx("title")}>Sửa hồ sơ</h1>
                    <div
                      onClick={onClose}
                      role="button"
                      className={cx("close-container")}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                  <div className={cx("content-container")}>
                    <div className={cx("content-item")}>
                      <div className={cx("item-title")}>Ảnh hồ sơ</div>
                      <div
                        className={cx("item-avatar")}
                        // onClick={() => handleClickUpload("image")}
                      >
                        <div role="button" className={cx("avatar-container")}>
                          <img src={inputAvatar} className={cx("avatar")} />
                        </div>
                        <div
                          role="button"
                          className={cx("edit-avatar-container")}
                        >
                          {/* <PenIcon className={cx("edit-icon")} /> */}
                          <input
                            type="file"
                            ref={inputRef}
                            tabIndex="-1"
                            accept=".jpg,.jpeg,.png,.tiff,.heic,.webp"
                            className={cx("input-upload")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={cx("content-item")}>
                      <div className={cx("item-title")}>TikTok ID</div>
                      <div className={cx("edit-container")}>
                        <input
                          className={cx("input-text", isError && "error")}
                          type="text"
                          placeholder="TikTok ID"
                          defaultValue={inputTikTokID}
                          //   onChange={handleChangeInput(setInputTikTokID)}
                          maxLength={24}
                        />
                      </div>
                    </div>
                    <div className={cx("content-item")}>
                      <div className={cx("item-title")}>Tên</div>
                      <div className={cx("edit-container")}>
                        <input
                          className={cx("input-text")}
                          type="text"
                          placeholder="Tên"
                          defaultValue={inputFullName}
                          //   onChange={handleChangeInput(setInputFullName)}
                        />
                        <p className={cx("tip")}>
                          Bạn chỉ có thể thay đổi biệt danh 7 ngày một lần.
                        </p>
                      </div>
                    </div>
                    <div className={cx("content-item", "bio")}>
                      <div className={cx("item-title")}>Tiểu sử</div>
                      <div className={cx("edit-container")}>
                        <textarea
                          placeholder="Tiểu sử"
                          minLength={0}
                          maxLength={80}
                          className={cx("textarea-bio")}
                          defaultValue={inputBio}
                          //   onChange={handleChangeInput(setInputBio)}
                        ></textarea>
                        <div className={cx("text-count")}>
                          <span>0</span>
                          /80
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className={cx("footer-container")}>
                    <button onClick={onClose} className={cx("btn-cancel")}>
                      Hủy
                    </button>
                    <button
                      primary
                      loading={bntLoading}
                      disabled={btnDisable}
                      className={cx("btn-save")}
                      //   onClick={handleEditProfile}
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EditProfile;
