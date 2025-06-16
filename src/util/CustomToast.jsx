const CustomToast = ({ title, message, icon = "✅" }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        {message && (
          <p className="text-sm text-white/80 mt-1 leading-[1.4]">{message}</p>
        )}
      </div>
    </div>
  );
};

export default CustomToast;
