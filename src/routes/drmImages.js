const express = require("express");
const router = express.Router();
const filterDrmImages = require("../controllers/filterDrmImages");

router.post("/", async (req, res) => {
  try {
    const result = filterDrmImages(req.body.payload);
    res.status(200).send({ response: result });
  } catch (e) {
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = router;
