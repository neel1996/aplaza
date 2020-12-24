import Link from "next/link";
import React from "react";

export default function Header() {
  const menuItems = ["HOME", "COMPLETED"];

  return (
    <div className="w-full flex justify-around items-center align-middle mx-auto">
      <Link href="/">
        <div className="flex logo gap-2 justify-center items-center align-middle w-1/6 transition-all transform cursor-pointer hover:scale-105">
          <div
            className="w-16 h-16 block"
            style={{
              backgroundImage: `url("/assets/aplaza.png")`,
              backgroundSize: "100% 100%",
            }}
          ></div>
          <div className="font-sans font-light text-5xl -mt-4 text-gray-500">
            aplaza
          </div>
        </div>
      </Link>
      <div className="p-3 rounded-lg shadow bg-green-400 text-white font-semibold cursor-pointer hover:bg-green-500 hover:shadow-lg transition-all">
        COMPLETED
      </div>
    </div>
  );
}
