import { getPathFromFiles } from "../getPath.js";
import { readFile } from "node:fs/promises";

const calculateHash = async () => {
  const fileToCalculateHashFor = getPathFromFiles(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );

  try {
    const fileContent = await readFile(fileToCalculateHashFor);
    const { createHash } = await import("node:crypto");
    const hash = createHash("sha256");
    hash.update(fileContent);
    console.log(hash.digest("hex"));
  } catch (err) {
    throw err;
  }
};

await calculateHash();
