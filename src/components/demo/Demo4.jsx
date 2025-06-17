import { notify } from "@/util/Notify";

const DemoToast = () => {
  return (
    <div className="p-6">
      <button
        onClick={() => notify("success", "Asset Added", "Your new asset is now listed.")}
        className="py-2 px-4 bg-[var(--primary)] text-white rounded-md"
      >
        Show Success Toast
      </button>
    </div>
  );
};

export default DemoToast;
