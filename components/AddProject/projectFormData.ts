import {
  faCodeBranch,
  faInfoCircle,
  faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectDataType } from "./projectDataTypes";

export const projectFormData: ProjectDataType[] = [
  {
    name: "name",
    label: "Project Name",
    type: "text",
    options: {
      placeHolder: "Enter a name for your project",
      pinIcon: faSortAlphaUp,
    },
  },
  {
    name: "description",
    label: "Project Description",
    type: "text",
    options: {
      placeHolder: "Enter a short description for your project",
      pinIcon: faInfoCircle,
    },
  },
  {
    name: "due-date",
    label: "Completion Target Date",
  },
  {
    name: "repo",
    label: "Git Repository",
    showHintLabel: true,
    hintData: "If you do not have a repo, you can leave it empty",
    type: "text",
    options: {
      placeHolder: "Enter the repository URL for your project",
      pinIcon: faCodeBranch,
    },
  },
];
