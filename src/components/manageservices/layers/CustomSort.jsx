import { Select } from "antd";
import { useState } from "react";

const CustomSort = ({ option, defaultValue, color }) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value) => {
    setSelected(value);
    console.log("Selected:", value);
  };

  return (
    <div className="w-[125px] flex flex-col gap-y-[2px] ">
      <Select
        value={selected}
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
