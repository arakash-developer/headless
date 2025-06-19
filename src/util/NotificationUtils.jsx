import { notification } from "antd";

// NotificationUtils.jsx
const [api, contextHolder] = notification.useNotification();
export const showNotification = () => {
  api.info({
    message: (
      <h2 className="font-medium text-[22px] leading-[117%] text-[#343a40]">
        User added successfully!
      </h2>
    ),
    description: (
      <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
        The new customer’s record is created successfully.
      </p>
    ),
    // icon: <img src={Success} alt="success" className="w-6 h-6" />,
    placement: "topRight",
  });
};
