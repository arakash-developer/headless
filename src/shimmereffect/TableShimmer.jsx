const shimmerRows = 8;
const shimmerCols = 7;

const TableShimmer = () => {
  return (
    <div className="w-full animate-pulse">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            {[...Array(shimmerCols)].map((_, idx) => (
              <th key={idx} className="p-4">
                <div className="h-3 w-16 bg-gray-200 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(shimmerRows)].map((_, rowIdx) => (
            <tr key={rowIdx}>
              {[...Array(shimmerCols)].map((_, colIdx) => (
                <td key={colIdx} className="p-4">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShimmer;
