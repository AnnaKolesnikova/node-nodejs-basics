import { getPath } from "../getPath.js";
import { readFile } from "node:fs/promises";
import { fsError } from "../error.js";

const read = async () => {
  const fileToRead = getPath(import.meta.url, "files", "fileToRead.txt");

  try {
    const fileContent = await readFile(fileToRead, { encoding: "utf8" });
    console.log(fileContent);
  } catch (err) {
    throw new Error(fsError);
  }
};

await read();
