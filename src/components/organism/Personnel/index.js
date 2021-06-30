import React from "react";
import { ICPlus, ICSearch } from "../../../assets";
import { Button, Input } from "../../atoms";
import { Card } from "../../molecules";

export default function Personnel({ users }) {
  return (
    <div className="bg-gray-50 p-4 md:w-8/12 lg:w-9/12 xl:w-10/12 md:ml-auto md:pt-24">
      <div className="bg-white p-4 lg:flex lg:items-center lg:justify-between">
        <div className="">
          <p className="text-primary uppercase font-bold text-3xl">
            Personnel List
          </p>
          <p className="text-gray-400 text-xl mt-1">List of all personnels</p>
        </div>

        <div className="block lg:flex">
          <Input
            type="input-icon"
            icon={<ICSearch />}
            placeholder="Find Personnels"
            className="lg:w-1/2"
          />

          <Button
            type="button-icon"
            title="ADD PERSONNEL"
            icon={<ICPlus />}
            className="bg-primary w-full flex justify-between items-center text-sm text-white py-1.5 px-2 mt-2.5 lg:ml-3 lg:w-1/2"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden md:flex md:flex-wrap">
        {users?.map((user, i) => (
          <Card data={user} key={i} />
        ))}
      </div>
    </div>
  );
}
