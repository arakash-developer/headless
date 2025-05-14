import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  const calculateStrength = (pass) => {
    let s = 0;
    if (pass.length >= 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[a-z]/.test(pass)) s++;
    if (/\d/.test(pass)) s++;
    if (/[\W_]/.test(pass)) s++;
    return s;
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setScore(calculateStrength(val));
  };

  return (
    <div className="w-full max-w-sm">
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className="w-full border rounded px-3 py-2"
      />
      <div className="h-2 mt-2 w-full bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(score / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Password;
