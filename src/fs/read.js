import { getPathFromFiles } from "../getPath.js";
import { readFile } from "node:fs/promises";
import { errorMsg } from "../getErrorMsg.js";

const read = async () => {
  const fileToRead = getPathFromFiles(import.meta.url, "fileToRead.txt");

  try {
    const fileContents = await readFile(fileToRead, { encoding: "utf8" });
    console.log(fileContents);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await read();
