import React, { useState } from "react";

export default function InputIcon({ icon, placeholder, className }) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      data-testid="input-icon"
      className={`flex items-center border px-2 mt-2 transition-all duration-200 ${className} ${
        focus ? "ring ring-primary ring-opacity-30" : ""
      }`}
    >
      {icon}
      <input
        type="text"
        className="w-full py-2 px-3 focus:outline-none"
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
