import React, { useState } from "react";

export default function InputIcon({ icon, placeholder, className }) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`flex items-center border px-2 mt-2 transition-all duration-200 ${className} ${
        focus ? "ring ring-primary ring-opacity-30" : ""
      }`}
    >
      {icon}
      <input
        type="text"
        className="w-full py-2 px-3 focus:outline-none"
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
