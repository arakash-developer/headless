import { Select } from "antd";

const CustomSort = ({ option, defaultValue,color }) => {
  const handleChange = (option) => {
    setSelected(option);
    console.log("Selected:", option);
  };
  return (
    <div className="w-[125px] flex flex-col gap-y-[2px] ">
      <Select
        defaultValue={defaultValue}
        style={{ height: "40px" }}
        onChange={handleChange}
        className="w-full font-normal text-xs leading-[135%] text-[#343a40]"
        dropdownMatchSelectWidth={false}
      >
        {option.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            <p className="font-normal text-xs leading-[135%] text-[#343a40]">
              {option.label}
            </p>
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSort;
