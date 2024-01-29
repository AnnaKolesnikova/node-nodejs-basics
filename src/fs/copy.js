import { getPath } from "../getPath.js";
import { mkdir, readdir, copyFile } from "node:fs/promises";
import { errorMsg } from "../fsErrorMsg.js";

const copy = async () => {
  const sourceFolder = getPath(import.meta.url, "/files", "");
  const destinationFolder = getPath(import.meta.url, "/files_copy", "");

  try {
    await mkdir(destinationFolder);
    const files = await readdir(sourceFolder);
    await Promise.all(
      files.map((index) =>
        copyFile(`${sourceFolder}/${index}`, `${destinationFolder}/${index}`)
      )
    );
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await copy();
