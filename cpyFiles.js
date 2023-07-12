import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFiles() {
  const names = ["sushi-6", "sushi-7", "sushi-8", "sushi-9"];
  names.forEach((name) => {
    fs.copyFileSync(
      path.join(__dirname, "assets/" + name + ".png"),
      path.join(__dirname, "dist/assets/" + name + ".png"),
      0,
      (err) => {
        console.log("Failed to Copy", name);
      }
    );
  });
}

getFiles();
