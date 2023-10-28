const fs = require("fs");
const path = require("path");

for (let file of fs.readdirSync("./src")) {
  let out = path.join("build", file);
  fs.copyFile(file, out);
}
