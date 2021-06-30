import React from "react";
import { DummyPhotoProfile, IMGLogo } from "../../../assets";

export default function index({ onClick, showMenu }) {
  return (
    <div className="p-4 flex items-center justify-between md:justify-end md:order-2 md:fixed md:top-0 md:right-0 md:left-0 md:shadow-sm bg-white">
      <div className="flex items-center md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => onClick(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <img src={IMGLogo} alt="" className="h-8 ml-4" />
      </div>

      <p className="hidden text-gray-500 font-medium md:block md:mr-4">
        Hallo, <span className="text-primary">Gadjian Enal</span>
      </p>
      <div className="w-10 h-10  rounded-full overflow-hidden flex items-center">
        <img src={DummyPhotoProfile} alt="avatar" className="w-full h-full" />
      </div>
    </div>
  );
}
