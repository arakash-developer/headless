// notificationUtils.jsx

import CloseIcon from "@public/close.svg"; // Ensure this path is correct
import { notification } from "antd"; // Assuming you're using antd for notifications

export const NotificationUtils = ({
  message,
  description,
  icon = <img src={CloseIcon} alt="close" className="w-6 h-6" />,
}) => {
  notification.info({
    message: (
      <h2 className="font-medium text-[22px] leading-[117%] text-[#343a40]">
        {message}
      </h2>
    ),
    description: (
      <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
        {description}
      </p>
    ),
    icon: icon,
    placement: "topRight", // Hardcoded placement
  });
};
