import { getFolderPath } from "./getPath.js";
import { readdir } from "node:fs/promises";
import { errorMsg } from "./getErrorMsg.js";

const list = async () => {
  const src = getFolderPath(import.meta.url, "/files");
  const files = await readdir(src);

  try {
    await Promise.all(files.map((fileName) => console.log(`${fileName}`)));
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await list();
