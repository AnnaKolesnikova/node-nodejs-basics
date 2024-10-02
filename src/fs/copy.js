import { getPath } from "../getPath.js";
import { mkdir, readdir, copyFile } from "node:fs/promises";
import { fsError } from "../error.js";

const copy = async () => {
  const source = getPath(import.meta.url, "/files", "");
  const destination = getPath(import.meta.url, "/files_copy", "");

  try {
    await mkdir(destination);
    const files = await readdir(source);

    await Promise.all(
      files.map((index) => {
        copyFile(`${source}/${index}`, `${destination}/${index}`);
      })
    );
    console.log(files);
  } catch (err) {
    throw new Error(fsError);
  }
};

await copy();
