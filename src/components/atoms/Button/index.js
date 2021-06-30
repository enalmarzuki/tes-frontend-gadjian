import React from "react";
import ButtonIcon from "./ButtonIcon";
import ButtonScrollTop from "./ButtonScrollTop";

export default function index({
  type,
  onClick,
  title,
  path,
  icon,
  alignIcon,
  className,
  disabled,
}) {
  if (type === "button-icon") {
    return (
      <ButtonIcon
        disabled={disabled}
        onClick={onClick}
        title={title}
        path={path}
        icon={icon}
        alignIcon={alignIcon}
        className={className}
      />
    );
  }

  if (type === "button-scroll-top") {
    return <ButtonScrollTop />;
  }

  return (
    <div>
      <p>button not available</p>
    </div>
  );
}
