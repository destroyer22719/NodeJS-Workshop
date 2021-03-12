const fs = require("fs");

console.log("line 3");
const data = fs.readFileSync("fs.js", "utf8");
console.log(data);
console.log("line 8")