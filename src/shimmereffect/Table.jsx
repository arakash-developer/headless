import { Skeleton } from "antd";

const Table = () => {
  return (
    <div
      style={{
        padding: "1rem",
        width: "300px",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <Skeleton height={180} borderRadius={8} />
      <Skeleton height={20} width={200} style={{ marginTop: "1rem" }} />
      <Skeleton height={15} width={150} style={{ marginTop: "0.5rem" }} />
    </div>
  );
};

export default Table;
