const multer = require("multer");
const { randomUUID } = require("crypto");
const { extname } = require("path");

module.exports.upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
      const ext = extname(file.originalname);
      const uuid = randomUUID({ disableEntropyCache: true });

      cb(null, `${uuid}${ext}`);
    },
  }),
});
