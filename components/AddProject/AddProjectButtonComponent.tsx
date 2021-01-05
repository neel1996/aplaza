import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

export default function AddProjectButtonComponent() {
  library.add(fas);

  return (
    <Link href="/addproject">
      <div className="flex fixed bottom-0 right-0 mr-6 my-6 justify-center align-middle items-center rounded-full w-16 h-16 bg-green-500 border-4 border-green-300 transition-all hover:shadow-lg hover:border-green-200 cursor-pointer">
        <div className="flex w-full h-full mx-auto my-auto justify-center items-center align-middle font-sans font-semibold text-green-100">
          <div>
            <FontAwesomeIcon icon={["fas", "plus"]} size="2x"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </Link>
  );
}
