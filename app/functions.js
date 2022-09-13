const { Router } = require("express");
const middleware = require("./middleware");
const path = require("path");
const router = Router();

router.post(
  "/upload-png",
  middleware.upload.single("file"),
  async (req, res, next) => {
    try {
      res.redirect(`/analyze/${path.parse(req.file.path).name}`);
    } catch (e) {
      return next(e);
    }
  }
);

module.exports = router;
