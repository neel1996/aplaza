import shortid from "shortid";
export function projectIdGenerator(): string {
  return shortid.generate();
}
