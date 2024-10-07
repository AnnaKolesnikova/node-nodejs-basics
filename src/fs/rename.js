import { getPath } from "../getPath.js";
import { rename } from "node:fs/promises";
import { fsError } from "../error.js";

const renameFile = async () => {
  const wrongFilename = getPath(import.meta.url, "files", "wrongFilename.txt");
  const properFilename = getPath(import.meta.url, "files", "properFilename.md");

  try {
    await rename(wrongFilename, properFilename);
  } catch (err) {
    throw new Error(fsError);
  }
};

await renameFile();
