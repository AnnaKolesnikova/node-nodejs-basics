import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPath = (url, foldername, filename) => {
  const _filename = fileURLToPath(url);
  const _dirname = dirname(_filename);
  const fileOrFolderPath = join(_dirname, foldername, filename);
  return fileOrFolderPath;
};
