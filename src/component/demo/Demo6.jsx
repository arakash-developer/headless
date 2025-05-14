import React, { useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';

const CustomRadio = ({ value, current, onChange, label }) => {
  const isChecked = value === current;
  return (
    <label className="flex items-center space-x-2 cursor-pointer select-none">
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="peer hidden"
      />
      <div
        className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center text-white text-[12px]
          ${isChecked ? 'bg-black border-black' : 'border-gray-400'}
        `}
      >
        {isChecked && <CheckOutlined />}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

const App = () => {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="space-y-3 p-6">
      <CustomRadio
        value="option1"
        current={selected}
        onChange={setSelected}
        label="Option 1"
      />
      <CustomRadio
        value="option2"
        current={selected}
        onChange={setSelected}
        label="Option 2"
      />
      <CustomRadio
        value="option3"
        current={selected}
        onChange={setSelected}
        label="Option 3"
      />
    </div>
  );
};

export default App;
