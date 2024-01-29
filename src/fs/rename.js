import { getPath } from "../getPath.js";
import { rename } from "node:fs/promises";
import { errorMsg } from "../fsErrorMsg.js";

const renameFile = async () => {
  const fileToRename = getPath(import.meta.url, "files", "wrongFilename.txt");
  const newFileName = getPath(import.meta.url, "files", "properFilename.md");
  try {
    await rename(fileToRename, newFileName);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await renameFile();
