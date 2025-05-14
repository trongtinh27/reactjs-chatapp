import { forwardRef } from "react";

export const MessageIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 17.504c0 6.103-4.606 10.57-11 10.57-1.065 0-2.08-.095-3.032-.327a4.26 4.26 0 0 0-2.39.09L8.91 28.962c-.59.202-1.164-.372-.964-.985l.729-2.411a3.007 3.007 0 0 0-.291-2.5C7.414 21.484 7 19.596 7 17.504v-.002c0-6.103 4.607-10.498 11-10.498S29 11.399 29 17.502v.002z"
        ></path>
      </svg>
    );
  }
);

export const MarketPlaceIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M12.164 14.88A3 3 0 0 1 6.5 13.5c0-1.03.967-3.294 1.699-4.858C8.674 7.625 9.705 7 10.828 7h14.345c1.122 0 2.153.625 2.628 1.642.732 1.564 1.699 3.827 1.699 4.858a3 3 0 0 1-5.664 1.38c-.066-.126-.276-.126-.342 0a3 3 0 0 1-5.324.008c-.066-.126-.274-.126-.34 0a3 3 0 0 1-5.324-.008c-.066-.126-.276-.126-.342 0zM12.479 17.714a.267.267 0 0 0-.288 0 4.976 4.976 0 0 1-3.086.77c-.315-.024-.605.211-.605.528v7.984a2 2 0 0 0 2 2h4a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h4a2 2 0 0 0 2-2v-7.984c0-.317-.29-.552-.605-.527a4.976 4.976 0 0 1-3.086-.77.267.267 0 0 0-.288 0c-.776.496-1.7.785-2.691.785-.99 0-1.911-.288-2.687-.783a.267.267 0 0 0-.286 0 4.975 4.975 0 0 1-2.687.783 4.976 4.976 0 0 1-2.691-.786z"></path>
      </svg>
    );
  }
);

export const MessageRequestsIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 28.074c6.394 0 11-4.467 11-10.57v-.002c0-6.103-4.606-10.498-11-10.498-6.392 0-10.998 4.395-11 10.498v.002c.001 2.091.415 3.98 1.384 5.562.458.747.563 1.664.29 2.5l-.728 2.41c-.2.614.373 1.188.964.986l3.668-1.125a4.26 4.26 0 0 1 2.39-.09c.953.232 1.967.327 3.032.327zM13 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        ></path>
      </svg>
    );
  }
);

export const ArchivedIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M8 7.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1H8z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 13.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v12a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-12zm4.5 3.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25z"
        ></path>
      </svg>
    );
  }
);

export const BottomArrowIcon = forwardRef(
  ({ width = "25px", height = "12px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 25 12"
        fill="currentColor"
        className={className}
        style={{ transform: "scale(1, 1) translate(12px, 0px) rotate(0deg)" }}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          clipRule="evenodd"
          d="M9.67157 9.17157C11.2337 10.7337 13.7663 10.7337 15.3284 9.17157L24.5 0L0.5 0L9.67157 9.17157Z"
        ></path>
      </svg>
    );
  }
);

export const SettingIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.842 7.526A1.5 1.5 0 0 0 18.419 6.5h-.838a1.5 1.5 0 0 0-1.423 1.026l-.352 1.056c-.157.472-.541.827-1.006 1.003a8.93 8.93 0 0 0-.487.202c-.453.204-.976.225-1.42.002l-.997-.498a1.5 1.5 0 0 0-1.732.281l-.592.592a1.5 1.5 0 0 0-.28 1.732l.497.996c.223.445.202.968-.002 1.421-.072.16-.139.323-.202.487-.176.465-.531.849-1.003 1.006l-1.056.352A1.5 1.5 0 0 0 6.5 17.581v.838a1.5 1.5 0 0 0 1.026 1.423l1.056.352c.472.157.827.541 1.003 1.006.063.164.13.327.202.487.204.453.225.976.002 1.42l-.498.997a1.5 1.5 0 0 0 .281 1.732l.593.592a1.5 1.5 0 0 0 1.73.28l.998-.497c.444-.223.967-.202 1.42.002.16.072.323.139.487.202.465.176.849.531 1.006 1.003l.352 1.056a1.5 1.5 0 0 0 1.423 1.026h.838a1.5 1.5 0 0 0 1.423-1.026l.352-1.056c.157-.472.541-.827 1.006-1.003.164-.063.327-.13.486-.202.454-.204.977-.225 1.421-.002l.997.498a1.5 1.5 0 0 0 1.732-.281l.592-.592a1.5 1.5 0 0 0 .28-1.732l-.497-.996c-.223-.445-.202-.968.002-1.421.072-.16.139-.323.202-.487.176-.465.531-.849 1.003-1.006l1.056-.352a1.5 1.5 0 0 0 1.026-1.423v-.838a1.5 1.5 0 0 0-1.026-1.423l-1.056-.352c-.472-.157-.827-.541-1.003-1.006a8.991 8.991 0 0 0-.202-.487c-.204-.453-.225-.976-.002-1.42l.498-.997a1.5 1.5 0 0 0-.281-1.732l-.593-.592a1.5 1.5 0 0 0-1.73-.28l-.998.497c-.444.223-.967.202-1.42-.002a8.938 8.938 0 0 0-.487-.202c-.465-.176-.849-.531-1.006-1.003l-.352-1.056zM18 23.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        ></path>
      </svg>
    );
  }
);

export const RestrictedAccountIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M7.705 28.41c-.19-.467.087-.97.444-1.327L27.867 7.366a1.25 1.25 0 1 1 1.768 1.768l-1.818 1.817c-.34.34-.384.87-.148 1.29C28.525 13.758 29 15.541 29 17.5v.003c-.001 6.103-4.607 10.57-11 10.57-1.066 0-2.08-.095-3.033-.327a4.26 4.26 0 0 0-2.39.09L8.91 28.962c-.36.099-.957.054-1.205-.552zM22.184 7.697C20.913 7.244 19.506 7 18 7 11.607 7 7 11.396 7 17.498v.002c0 1.689.27 3.245.884 4.615a.927.927 0 0 0 1.474.22L22.476 9.215c.481-.48.35-1.29-.292-1.52z"></path>
      </svg>
    );
  }
);

export const SaveHouseIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.162 7.624a3 3 0 0 1 3.676 0l9.642 7.473a1.342 1.342 0 0 1-.822 2.403H27.25a.25.25 0 0 0-.25.25v8.75a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-8.75a.25.25 0 0 0-.25-.25H7.342a1.342 1.342 0 0 1-.822-2.403l9.642-7.473zm3.532 10.852c-.203.14-.314.387-.242.622l1.514 4.932a.75.75 0 0 1-.718.97h-4.497a.75.75 0 0 1-.717-.97l1.514-4.932c.072-.235-.04-.483-.242-.622a3 3 0 1 1 3.388 0z"
        ></path>
      </svg>
    );
  }
);

export const FamilyIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M7.25 12.305C7.25 16.207 9.446 18 12 18s4.75-1.793 4.75-5.695C16.75 9.123 14.75 7 12 7s-4.75 2.123-4.75 5.305zM15.082 21.607c.39-.423.262-1.13-.296-1.269A11.576 11.576 0 0 0 12 20c-4.835 0-9 2.985-9 6.665C3 27.405 3.37 28 4.06 28h7.81c.66 0 1.13-.675 1.13-1.335 0-1.97.83-3.697 2.082-5.058zM19.25 12.305C19.25 16.207 21.446 18 24 18s4.75-1.793 4.75-5.695C28.75 9.123 26.75 7 24 7s-4.75 2.123-4.75 5.305zM33 26.665c0 .74-.37 1.335-1.06 1.335H16.06c-.69 0-1.06-.595-1.06-1.335C15 22.985 19.165 20 24 20s9 2.985 9 6.665z"></path>
      </svg>
    );
  }
);

export const HelpIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1.311-15.93c-.314.192-.585.482-.832.892a1 1 0 0 1-1.713-1.032c.365-.606.844-1.164 1.502-1.566.663-.406 1.446-.614 2.354-.614 2.396 0 4.5 1.565 4.5 4 0 1.865-1.227 2.827-2.065 3.483l-.067.053c-.913.717-1.368 1.13-1.368 1.964a1 1 0 1 1-2 0c0-1.865 1.227-2.827 2.065-3.483l.067-.053c.913-.717 1.368-1.13 1.368-1.964 0-1.043-.896-2-2.5-2-.592 0-1.003.132-1.311.32zM19.25 24a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
        ></path>
      </svg>
    );
  }
);

export const ReportIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.747 8.027c-.764-1.367-2.73-1.367-3.494 0L6.757 25.025C6.012 26.358 6.977 28 8.504 28h18.992c1.528 0 2.492-1.642 1.747-2.975L19.747 8.027zm-3.159 5.97a1.414 1.414 0 1 1 2.824 0l-.353 6.005a1.06 1.06 0 0 1-2.118 0l-.353-6.005zm2.662 9.753a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
        ></path>
      </svg>
    );
  }
);
export const MoreIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M8 10a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H8zM7 17.75a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-.5zM7 24.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-.5z"></path>
      </svg>
    );
  }
);

export const LogoutIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M21.498 14.75a1 1 0 0 0 1-1V12a4 4 0 0 0-4-4h-6.5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6.5a4 4 0 0 0 4-4v-1.75a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1V24a1.5 1.5 0 0 1-1.5 1.5h-6.5a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h6.5a1.5 1.5 0 0 1 1.5 1.5v1.75a1 1 0 0 0 1 1h.5z"></path>
        <path d="M14.498 16.75h9.752a.25.25 0 0 0 .25-.25v-1.858a1 1 0 0 1 1.643-.766l4.002 3.356a1 1 0 0 1 0 1.532l-4.002 3.357a1 1 0 0 1-1.643-.767V19.5a.25.25 0 0 0-.25-.25h-9.752a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1z"></path>
      </svg>
    );
  }
);

export const NewChatIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path d="M17.305 16.57a1.998 1.998 0 0 0-.347.467l-1.546 2.87a.5.5 0 0 0 .678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 1 0-2.121-2.122l-8.631 8.632z"></path>
        <path d="M18 10.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v6a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h6z">
          <path d="M17.305 16.57a1.998 1.998 0 0 0-.347.467l-1.546 2.87a.5.5 0 0 0 .678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 1 0-2.121-2.122l-8.631 8.632z"></path>
        </path>
      </svg>
    );
  }
);

export const SearchIcon = forwardRef(
  ({ width = "20px", height = "20px", className, ...props }, ref) => {
    return (
      <svg
        viewBox="6 6 24 24"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.522 21.662c-.389-.344-.443-.925-.181-1.373a8.5 8.5 0 1 0-3.051 3.051c.447-.261 1.028-.207 1.372.182l3.608 4.073a1.647 1.647 0 1 0 2.325-2.326l-4.073-3.607zm-3.28-9.905a6 6 0 1 1-8.484 8.486 6 6 0 0 1 8.485-8.486z"
        ></path>
      </svg>
    );
  }
);

export const MoreV2Icon = forwardRef(
  ({ width = "28px", height = "28px", className, onClick, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
        onClick={onClick}
      >
        <path
          d="M12.5 18C12.5 19.2426 11.4926 20.25 10.25 20.25C9.00736 20.25 8 19.2426 8 18C8 16.7574 9.00736 15.75 10.25 15.75C11.4926 15.75 12.5 16.7574 12.5 18Z"
          fill="#0084ff"
        ></path>
        <path
          d="M20.25 18C20.25 19.2426 19.2426 20.25 18 20.25C16.7574 20.25 15.75 19.2426 15.75 18C15.75 16.7574 16.7574 15.75 18 15.75C19.2426 15.75 20.25 16.7574 20.25 18Z"
          fill="#0084ff"
        ></path>
        <path
          d="M25.75 20.25C26.9926 20.25 28 19.2426 28 18C28 16.7574 26.9926 15.75 25.75 15.75C24.5074 15.75 23.5 16.7574 23.5 18C23.5 19.2426 24.5074 20.25 25.75 20.25Z"
          fill="#0084ff"
        ></path>
      </svg>
    );
  }
);

export const ImageIcon = forwardRef(
  ({ width = "28px", height = "28px", className, onClick, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="currentColor"
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
        onClick={onClick}
      >
        <path d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z" fill="#0084ff"></path>
        <path
          clipRule="evenodd"
          d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z"
          fill="#0084ff"
          fillRule="evenodd"
        ></path>
      </svg>
    );
  }
);

export const CloseIcon = forwardRef(
  ({ width = "25.5px", height = "25.5px", className, ...props }, ref) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
        data-e2e=""
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
        ></path>
      </svg>
    );
  }
);

export const PenIcon = forwardRef(
  ({ width = "16px", height = "16px", className, ...props }, ref) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        ref={ref}
        {...props}
        data-e2e=""
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.5858 5.08579C27.3479 4.32371 28.5767 4.30253 29.3646 5.03789L36.8646 12.0379C37.2612 12.408 37.4904 12.9232 37.4997 13.4655C37.5091 14.0078 37.2977 14.5307 36.9142 14.9142L16.9142 34.9142C16.5391 35.2893 16.0304 35.5 15.5 35.5H8.5C7.39543 35.5 6.5 34.6046 6.5 33.5V26C6.5 25.4696 6.71071 24.9609 7.08579 24.5858L26.5858 5.08579ZM28.0479 9.2805L10.5 26.8284V31.5H14.6716L32.622 13.5496L28.0479 9.2805Z"
        ></path>
        <path d="M7 41C7 40.4477 7.44772 40 8 40H41C41.5523 40 42 40.4477 42 41V43C42 43.5523 41.5523 44 41 44H8C7.44772 44 7 43.5523 7 43V41Z"></path>
      </svg>
    );
  }
);
