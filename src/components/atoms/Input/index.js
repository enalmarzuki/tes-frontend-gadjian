import React from "react";
import InputIcon from "./InputIcon";

export default function index({ type, icon, placeholder, className }) {
  if (type === "input-icon") {
    return (
      <InputIcon icon={icon} placeholder={placeholder} className={className} />
    );
  }

  return (
    <div>
      <p>input not available</p>
    </div>
  );
}
