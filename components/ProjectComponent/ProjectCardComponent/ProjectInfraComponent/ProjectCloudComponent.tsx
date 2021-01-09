import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  faDigitalOcean,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function ProjectCloudComponent(props: {
  projectCloudOption: string;
}) {
  const [cloud, setCloud] = useState<{ name: string; icon: IconDefinition }>({
    name: "",
    icon: faCloud,
  });

  useEffect(() => {
    switch (props.projectCloudOption) {
      case "aws":
        setCloud({
          name: "AWS",
          icon: faAws,
        });
        break;
      case "azure":
        setCloud({
          name: "Azure",
          icon: faMicrosoft,
        });
        break;
      case "do":
        setCloud({
          name: "DigitalOcean",
          icon: faDigitalOcean,
        });
        break;
    }
  }, [props.projectCloudOption]);

  return (
    <div className="cloud mx-1 flex items-center">
      <div className="text-2xl font-sans text-gray-400 mx-1">
        <FontAwesomeIcon icon={cloud.icon}></FontAwesomeIcon>
      </div>
      <div className="font-sans text-gray-400">{cloud.name}</div>
    </div>
  );
}
