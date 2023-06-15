import { rename } from "node:fs/promises";
import { getPathFromFiles } from "../getPath.js";
import { errorMsg } from "../getErrorMsg.js";

const renameFile = async () => {
  const wrongFilenamePath = getPathFromFiles(
    import.meta.url,
    "wrongFilename.txt"
  );
  const properFilenamePath = getPathFromFiles(
    import.meta.url,
    "properFilename.md"
  );

  try {
    await rename(wrongFilenamePath, properFilenamePath);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await renameFile();
