import fs from "fs";
import path from "path";

export default function projectcount(req, res) {
  const projectDataPath = path.join(
    process.cwd(),
    "pages/api/data/projectCountData.json"
  );

  const projectDataString = fs.readFileSync(projectDataPath).toString("utf-8");
  const projectData = JSON.parse(projectDataString);

  res.json(projectData[0]);
}
