import { getPath } from "../getPath.js";
import { rm } from "node:fs/promises";
import { errorMsg } from "../fsErrorMsg.js";

const remove = async () => {
  const fileToRemove = getPath(import.meta.url, "files", "fileToRemove.txt");
  try {
    await rm(fileToRemove);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await remove();
