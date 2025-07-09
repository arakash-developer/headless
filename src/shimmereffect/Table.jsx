import { ShimmerTable } from "react-shimmer-effects";

const Table = () => {
  return (
    <div>
      <ShimmerTable
        mode="dark"
        row={7}
        col={5}
        border={1}
        borderColor={"#374151"}
        rounded={0.25}
        rowGap={16}
        colPadding={[10, 5, 10, 5]}
      />
    </div>
  );
};

export default Table;
