import { getPath } from "../getPath.js";
import { readdir } from "node:fs/promises";
import { errorMsg } from "../fsErrorMsg.js";

const list = async () => {
  const sourceFolder = getPath(import.meta.url, "files", "");
  try {
    const files = await readdir(sourceFolder);
    await Promise.all(files.map((fileName) => console.log(`${fileName}`)));
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await list();
