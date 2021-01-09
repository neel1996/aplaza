import {
  faAws,
  faDigitalOcean,
  faGoogle,
  faMicrosoft,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { da } from "date-fns/locale";
import React, { useState } from "react";

export default function FormRadioButton(props: {
  setParentCloudOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  type selectedOptionType = "aws" | "azure" | "do";
  const [selectedOption, setSelectedOption] = useState<selectedOptionType>();

  const cloudData: {
    icon: IconDefinition;
    label: string;
    code: selectedOptionType;
  }[] = [
    {
      icon: faAws,
      label: "AWS",
      code: "aws",
    },
    {
      icon: faMicrosoft,
      label: "Azure",
      code: "azure",
    },
    {
      icon: faDigitalOcean,
      label: "DigitalOcean",
      code: "do",
    },
  ];

  return (
    <div className="my-4 flex flex-wrap justify-start items-center w-11/12 xl:w-1/2 lg:w-2/3 md:w-3/4">
      <div className="text-lg font-semibold font-sans text-gray-500 my-6">
        Choose the cloud provider if you are planning to deploy your project to
        cloud
      </div>
      {cloudData.map((data) => {
        return (
          <div
            className={`w-full xl:w-1/3 lg:w-1/2 md:w-1/2 my-2 block p-5 text-center mx-2 rounded-lg shadow-md border-2   bg-white cursor-pointer hover:shadow:xl transition-all ${
              selectedOption === data.code
                ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-400"
                : "text-blue-600 border-blue-100 hover:bg-gray-50"
            }`}
            onClick={(e) => {
              setSelectedOption(data.code);
              props.setParentCloudOption(data.code);
            }}
          >
            <div>
              <FontAwesomeIcon
                icon={data.icon}
                className="text-3xl"
              ></FontAwesomeIcon>
            </div>
            <div className="text-center my-3 font-sans font-semibold text-xl ">
              {data.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
