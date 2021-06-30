import React from "react";
import { ICSimpleArrow } from "../../../assets";
import { Button } from "../../atoms";

export default function index({
  startIndex,
  endIndex,
  length,
  nextPage,
  prevPage,
}) {
  return (
    <div className="w-full md:w-8/12 lg:w-9/12 pb-4 xl:w-10/12 md:ml-auto bg-gray-50 pt-4">
      <div className="flex justify-center">
        <Button
          disabled={startIndex === 0}
          type="button-icon"
          title="Previous Page"
          className={`text-base md:text-lg font-medium flex items-center mx-4 ${
            startIndex === 0 ? "text-gray-300" : ""
          }`}
          icon={
            <ICSimpleArrow
              className={`transform rotate-180 ${
                startIndex === 0 ? "text-gray-300" : ""
              }`}
            />
          }
          alignIcon="left"
          onClick={prevPage}
        />

        <Button
          disabled={endIndex === length}
          type="button-icon"
          title="Next Page"
          className={`text-base md:text-lg font-medium flex items-center mx-4 ${
            endIndex === length ? "text-gray-300" : ""
          }`}
          icon={
            <ICSimpleArrow
              className={`${endIndex === length ? "text-gray-300" : ""}`}
            />
          }
          onClick={nextPage}
        />
      </div>
    </div>
  );
}
