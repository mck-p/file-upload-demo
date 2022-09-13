const path = require("path");

module.exports.port = process.env.PORT || 5000;
module.exports.urlBase =
  process.env.URL_BASE || `http://localhost:${module.exports.port}`;

module.exports.shouldShowUploadedImage = !!process.env.SHOW_UPLOADED_IMAGE;

module.exports.hardcodedFilename =
  process.env.HARDCODED_FILENAME || "contours-big.png";

module.exports.fsRoot = path.resolve(__dirname, "..");
