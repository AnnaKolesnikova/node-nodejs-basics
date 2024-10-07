import { getPath } from "../getPath.js";
import { rm } from "node:fs/promises";
import { fsError } from "../error.js";

const remove = async () => {
  const fileToRemove = getPath(import.meta.url, "files", "fileToRemove.txt");

  try {
    await rm(fileToRemove);
  } catch (err) {
    throw new Error(fsError);
  }
};

await remove();
