import React from "react";

export default function SimpleArrow({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`stroke-current ${className}`}
      viewBox="0 0 24 24"
    >
      <path d="M9 18L15 12 9 6"></path>
    </svg>
  );
}
