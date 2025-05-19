import CustomSort from "./layers/CustomSort";

const Residualanalysis = () => {
  const structureType = [
    { value: "Project ID All", label: "Project ID All" },
    { value: "Project ID All2", label: "Project ID All 2" },
  ];
  const AssetTypeAll = [
    { value: "Asset Type All", label: "Asset Type All" },
    { value: "Asset Type All2", label: "Asset Type All 2" },
  ];
  const StatusAll = [
    { value: "Status All", label: "Status All" },
    { value: "Status All2", label: "Status All 2" },
  ];
  const ClearFilter = [
    { value: "Clear Filter", label: "Clear Filter" },
    { value: "Clear Filter2", label: "Clear Filter 2" },
  ];
  return (
    <>
      <div className="mt-5">
        <h1 className="text-[var(--text-normal)]  font-semibold text-4xl leading-[125%] text-var(--primary2)">
          All Residual Analysis
        </h1>
        <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2">
          Dashboard / Analysis and Reports /
          <span className="text-[#343a40;]"> All Residual Analysis</span>
        </p>
      </div>
      <div className="mt-6 mb-4 flex gap-x-3 items-center">
        <CustomSort defaultValue="Project ID All" option={structureType} />
        <CustomSort defaultValue="Asset Type All" option={AssetTypeAll} />
        <CustomSort defaultValue="Status All" option={StatusAll} />
        <CustomSort defaultValue="Clear Filter" option={ClearFilter} />
      </div>
    </>
  );
};

export default Residualanalysis;
