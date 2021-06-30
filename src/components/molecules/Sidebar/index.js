import React from "react";
import { useHistory } from "react-router";
import { ICDaily, ICHome, ICPersonel, IMGLogo } from "../../../assets";
import { Button } from "../../atoms";

export default function Sidebar({ onClick, showMenu }) {
  const history = useHistory();
  return (
    <div
      className={`w-2/3 bg-gray-200 fixed top-0 bottom-0 transition-all duration-500 p-4 md:left-0 md:top-0 md:opacity-100 md:order-1 md:w-4/12 md:bg-white lg:w-3/12 xl:w-2/12 ${
        showMenu ? "left-0 shadow-md opacity-1" : "-left-80 opacity-0"
      }`}
    >
      <div className="flex items-center">
        <button
          className="focus:outline-none"
          onClick={() => onClick(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <img src={IMGLogo} alt="logo" className="h-8 ml-4 md:ml-0" />
      </div>

      <div className="mt-10">
        <Button
          type="button-icon"
          title="Beranda"
          path="/"
          icon={<ICHome />}
          alignIcon="left"
          onClick={() => history.push("/")}
        />

        <Button
          type="button-icon"
          title="Personel List"
          path="/personel-list"
          icon={<ICPersonel />}
          alignIcon="left"
          onClick={() => history.push("/personel-list")}
        />

        <Button
          type="button-icon"
          title="Daily Attendance"
          path="/daily-attendance"
          icon={<ICDaily />}
          alignIcon="left"
          onClick={() => history.push("/daily-attendance")}
        />
      </div>
    </div>
  );
}
