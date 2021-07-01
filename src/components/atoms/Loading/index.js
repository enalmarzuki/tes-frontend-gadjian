import React from "react";
import { ILLoading } from "../../../assets";

export default function index() {
  return (
    <div
      data-testid="personnel-list"
      className="=p-4 md:w-8/12 lg:w-9/12 xl:w-10/12 md:ml-auto md:pt-24 h-full px-6 flex justify-center items-center"
    >
      <div className="">
        <img src={ILLoading} alt="" className="h-16 animate-spin" />
        <p className="font-medium mt-2 animate-pulse text-gray-600">
          Loading...
        </p>
      </div>
    </div>
  );
}
