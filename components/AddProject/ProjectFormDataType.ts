import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type projectDataCodes = "name" | "description" | "due-date" | "repo";

export type ProjectFormDataType = {
  name: projectDataCodes;
  label: string;
  type?: string;
  showHintLabel?: boolean;
  hintData?: string;
  options?: {
    placeHolder?: string;
    pinIcon?: IconDefinition;
    maxLength?: number;
    required: boolean;
  };
};
