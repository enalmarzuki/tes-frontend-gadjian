import React from "react";
import { useHistory } from "react-router";

export default function ButtonIcon({
  onClick,
  title,
  path,
  icon,
  alignIcon,
  className,
  disabled,
}) {
  const history = useHistory();
  return (
    <button
      disabled={disabled}
      className={`${className ? className : "flex items-center mt-4 "} ${
        history.location.pathname === path ? "text-primary" : "bg-none"
      }`}
      onClick={onClick}
    >
      {alignIcon === "left" ? (
        <>
          {icon}
          <span className="font-medium ml-2.5">{title}</span>
        </>
      ) : (
        <>
          <span className="font-medium">{title}</span>
          {icon}
        </>
      )}
    </button>
  );
}
