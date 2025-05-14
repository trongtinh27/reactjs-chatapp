import classNames from "classnames/bind";
import { useRef, useState } from "react";
import Modal from "react-modal";

import styles from "./NewChatModal.module.scss";
import { CloseIcon, PenIcon } from "../Icons";
import Search from "../Conversation/Search";

const cx = classNames.bind(styles);
function NewChatModal({ isOpen, onClose }) {
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

  const handleClickUpload = async (mediaType) => {
    if (inputRef.current) {
      inputRef.current.click(); // Mở file picker
      inputRef.current.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "wcjgqsww");

          try {
            const res = await fetch(
              `https://api.cloudinary.com/v1_1/dsnt37ad4/${mediaType}/upload`,
              {
                method: "POST",
                body: formData,
              }
            );

            if (res.ok) {
              const data = await res.json();
              setInputAvatar(data.secure_url); // Lưu lại public_id của ảnh/video vừa upload
              console.log(data);
            } else {
              console.error("Upload failed", res.statusText);
            }
          } catch (error) {
            console.error("An error occurred while uploading:", error);
          }
        }
      };
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName="Overlay"
        ariaHideApp={false}
        className={cx("wrapper")}
      >
        <div className={cx("content")}>
          <div className={cx("container")}>
            <div className={cx("center")}>
              <section className={cx("edit-profile")}>
                <div className={cx("popup")}>
                  <div className={cx("header-container")}>
                    <h1 className={cx("title")}>Tạo nhóm</h1>
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
                      <div className={cx("item-title")}>Ảnh Nhóm</div>
                      <div
                        className={cx("item-avatar")}
                        onClick={() => handleClickUpload("image")}
                      >
                        <div role="button" className={cx("avatar-container")}>
                          <img
                            src={
                              inputAvatar ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGwJBI7Lc_HwIroVIGs9zWvHTUf9XK40STQ&s"
                            }
                            className={cx("avatar")}
                          />
                        </div>
                        <div
                          role="button"
                          className={cx("edit-avatar-container")}
                        >
                          <PenIcon className={cx("edit-icon")} />
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
                      <div className={cx("item-title")}>Gửi</div>
                      <div className={cx("edit-container")}>
                        <input
                          className={cx("input-text", isError && "error")}
                          type="text"
                          placeholder="Thêm thành viên"
                          defaultValue={inputTikTokID}
                          //   onChange={handleChangeInput(setInputTikTokID)}
                          maxLength={24}
                        />
                      </div>
                    </div>
                    <div className={cx("content-item")}>
                      <div className={cx("item-title")}>Tên nhóm</div>
                      <div className={cx("edit-container")}>
                        <input
                          className={cx("input-text")}
                          type="text"
                          placeholder="Tên nhóm"
                          defaultValue={inputFullName}
                          //   onChange={handleChangeInput(setInputFullName)}
                        />
                      </div>
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
                      Tạo
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

export default NewChatModal;
