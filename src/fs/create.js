import { getPath } from "../getPath.js";
import { appendFile } from "node:fs/promises";
import { errorMsg } from "../fsErrorMsg.js";

const create = async () => {
  const fileSrc = getPath(import.meta.url, "files", "fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await appendFile(fileSrc, fileContent, { flag: "wx" });
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await create();
