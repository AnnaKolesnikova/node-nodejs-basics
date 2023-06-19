import { mkdir, readdir, copyFile } from "node:fs/promises";
import { getPathFromFiles } from "../getPath.js";
import { errorMsg } from "../getErrorMsg.js";

const copy = async () => {
  const src = getPathFromFiles(import.meta.url, "/files", "");
  const destination = getPathFromFiles(import.meta.url, "/files_copy", "");

  try {
    await mkdir(destination);
    const files = await readdir(src);
    await Promise.all(
      files.map((index) =>
        copyFile(`${src}/${index}`, `${destination}/${index}`)
      )
    );
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await copy();
