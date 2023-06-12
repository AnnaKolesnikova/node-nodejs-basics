import { mkdir, readdir, copyFile } from "node:fs/promises";
import { getFolderPath } from "./getPath.js";
import { errorMsg } from "./getErrorMsg.js";

const copy = async () => {
  const src = getFolderPath(import.meta.url, "/files");
  const destination = getFolderPath(import.meta.url, "/files_copy");

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
