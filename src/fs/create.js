import { appendFile } from "node:fs/promises";
import { getPathFromFiles } from "../getPath.js";
import { errorMsg } from "../getErrorMsg.js";

const create = async () => {
  const filesSrc = getPathFromFiles(import.meta.url, "files", "fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await appendFile(filesSrc, fileContent, { flag: "wx" });
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await create();
