import React, { useEffect } from "react";
import { useState } from "react";
import { ICArrow } from "../../../assets";

export default function ButtonScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  // window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`fixed right-3 bg-primary h-14 w-14 rounded-full  transition-all duration-500 flex justify-center items-center ${
        visible ? "bottom-3 opacity-100 shadow-lg" : "-bottom-16 opacity-0"
      }`}
    >
      <button className="focus:outline-none" onClick={scrollToTop}>
        <ICArrow />
      </button>
    </div>
  );
}
