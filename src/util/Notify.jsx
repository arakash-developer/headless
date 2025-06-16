import { toast } from "react-toastify";
import CustomToast from "@/util/CustomToast"; 
import Succ from "@assets/Success.svg";

export const notify = (type, title, message = "", icon = "✅") => {
  const content = <CustomToast title={title} message={message} icon={Succ} />;

  switch (type) {
    case "success":
      return toast(content);
    case "error":
      return toast.error(content, {
        ...baseStyle,
        style: { ...baseStyle.style, background: "#DC2626" }, // red
        icon: false,
      });
    case "info":
      return toast.info(content, {
        ...baseStyle,
        style: { ...baseStyle.style, background: "#0EA5E9" }, // blue
        icon: false,
      });
    case "warn":
      return toast.warning(content, {
        ...baseStyle,
        style: { ...baseStyle.style, background: "#FACC15" }, // yellow
        icon: false,
      });
    default:
      return toast(content, baseStyle);
  }
};
