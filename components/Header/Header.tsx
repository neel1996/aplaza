import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-around items-center align-middle mx-auto my-auto">
      <Link href="/">
        <div className="flex logo gap-2 justify-center items-center align-middle w-1/2 xl:w-1/6 lg:w-1/4 md:w-1/2 h-full transition-all transform cursor-pointer hover:scale-105">
          <div
            className="w-14 h-14 xl:w-16 xl:h-16 block"
            style={{
              backgroundImage: `url("/assets/aplaza.png")`,
              backgroundSize: "100% 100%",
            }}
          ></div>
          <div className="h-full font-sans font-light text-3xl xl:text-5xl lg:text-4xl md:text-3xl -mt-2 text-gray-500">
            aplaza
          </div>
        </div>
      </Link>
      <div
        className="text-center p-3 rounded-lg shadow bg-green-400 text-white font-semibold cursor-pointer hover:bg-green-500 hover:shadow-lg transition-all"
        onClick={(e) => {
          router.push("/completed");
        }}
      >
        COMPLETED
      </div>
    </div>
  );
}
