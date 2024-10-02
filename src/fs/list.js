import { getPath } from "../getPath.js";
import { readdir } from "node:fs/promises";
import { fsError } from "../error.js";

const list = async () => {
  const folderPath = getPath(import.meta.url, "/files", "");

  try {
    const files = await readdir(folderPath);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    throw new Error(fsError);
  }
};

await list();
