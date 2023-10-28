const { createServer } = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

createServer((req, res) => {
  let page = fs.readFileSync("./pages/index.html");
  res.setHeader("content-type", "text/html");
  res.write(page);
  res.write();
  res.end();

  for( let file of fs.readdirSync("./pages")) {
  }

  // switch (req.url) {
  //   case "/":
  //     res.write(page);
  //     res.end();
  //     break;
  //   case "/about":
  //     res.end("You are on about page!");
  //     break;
  //   default:
  //     res.statusCode = 404;
  //     res.end("Page not found!");
  // }
}).listen(PORT);

