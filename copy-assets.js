const ncp = require("ncp").ncp;
const path = require("path");

// Specify the paths for source and destination
const sourceDir = path.join(__dirname, "src", "styles");
const destinationDir = path.join(__dirname, "dist", "styles");

// Copy the entire 'styles' directory to 'dist'
ncp(sourceDir, destinationDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Styles copied successfully!");
});
