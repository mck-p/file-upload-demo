const { Router } = require("express");
const env = require("./env");
const fs = require("fs/promises");

const router = Router();

const getFileNameById = async (id) => {
  const filePrefix = `${env.fsRoot}/public/uploads/${id}`;

  const result = await new Promise(async (res, rej) => {
    if (env.shouldShowUploadedImage) {
      const split = filePrefix.split("/");

      split.pop();

      const dirPath = split.join("/");
      const dirListing = await fs.readdir(dirPath, { withFileTypes: true });

      for (const file of dirListing) {
        if (file.isFile) {
          if (file.name.indexOf(id) === 0) {
            res(file.name);
          }
        }
      }

      rej(new Error("Cannot find value at that ID"));
    } else {
      res(env.hardcodedFilename);
    }
  });

  return result.split("/").pop();
};

router
  .get("/", (req, res) => {
    res.render("pages/home");
  })
  .get("/analyze/:id", async (req, res) => {
    const fileName = await getFileNameById(req.params.id);

    res.render("pages/analyze", {
      imageUrl: `${env.urlBase}/uploads/${fileName}`,
    });
  });

module.exports = router;
