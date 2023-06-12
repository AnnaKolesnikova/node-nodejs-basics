import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPathFromFiles = (url, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", filename);
  return filePath;
};

export const getFolderPath = (url, foldername) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const folderPath = join(__dirname, foldername);
  return folderPath;
};
