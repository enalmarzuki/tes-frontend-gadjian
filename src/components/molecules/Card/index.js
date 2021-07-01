import React from "react";
import { ICMoreHorizontal } from "../../../assets";
import moment from "moment";

export default function index({ data }) {
  return (
    <div
      data-testid="card-user"
      className="w-full md:w-1/2 md:px-2 lg:w-1/3 xl:w-1/4"
    >
      <div className="bg-white py-2 px-4 mt-4 rounded-2xl">
        <div className="flex items-center justify-between border-b-2 border-gray-200 -mx-4 px-4 pb-2">
          <p className="text-gray-500 text-sm truncate">
            Personnel ID :&nbsp;
            <span className="text-primary">{data.id.value || "123456"}</span>
          </p>
          <ICMoreHorizontal />
        </div>

        <div className="mt-3 flex items-center pb-2  overflow-hidden md:block">
          <div className="md:px-4 lg:px-10">
            <div className="border rounded-full w-24 h-24 md:w-full md:h-full flex justify-center items-center overflow-hidden">
              <img src={data.picture.large} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="ml-4 md:ml-0 md:mt-6">
            <div className="">
              <p className="text-xs font-bold text-gray-500">Name</p>
              <p className="text-sm text-gray-500">{`${data.name.first || ""} ${
                data.name.last || ""
              }`}</p>
            </div>

            <div className="mt-2">
              <p className="text-xs font-bold text-gray-500">Telephone</p>
              <p className="text-sm text-gray-500">{data.phone}</p>
            </div>

            <div className="hidden md:block mt-2">
              <p className="text-xs font-bold text-gray-500">Birthday</p>
              <p className="text-sm text-gray-500">
                {data?.dob?.date ? moment(data.dob.date).format("DD-MM") : "-"}
              </p>
            </div>

            <div className="hidden md:block  mt-2 max-w-full">
              <p className="text-xs font-bold text-gray-500">Email</p>
              <p className="text-sm text-gray-500 w-8/12 md:w-full truncate">
                {data.email || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
