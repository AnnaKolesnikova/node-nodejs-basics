import { rm } from "node:fs/promises";
import { getPathFromFiles } from "../getPath.js";
import { errorMsg } from "../getErrorMsg.js";

const remove = async () => {
  const fileToRemove = getPathFromFiles(
    import.meta.url,
    "files",
    "fileToRemove.txt"
  );
  try {
    await rm(fileToRemove);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await remove();
