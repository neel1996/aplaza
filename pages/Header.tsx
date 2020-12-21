import React from "react";
import Image from "next/image";

export default function Header() {
  const menuItems = ["HOME", "COMPLETED"];

  return (
    <div className="w-full flex justify-around items-center align-middle mx-auto">
      <div className="flex logo gap-2 justify-center items-center align-middle w-1/6">
        <div>
          <Image
            src="/assets/aplaza.png"
            alt="Aplaza_logo"
            width="72px"
            height="72px"
          ></Image>
        </div>
        <div className="font-sans font-light text-5xl -mt-4 text-gray-500">
          aplaza
        </div>
      </div>
      <div className="flex items-center ">
        {menuItems.map((menuItem) => {
          return (
            <div className="text-gray-400 cursor-pointer hover:text-gray-800 text-xl font-sans font-semibold mx-10">
              {menuItem}
            </div>
          );
        })}
      </div>
    </div>
  );
}
