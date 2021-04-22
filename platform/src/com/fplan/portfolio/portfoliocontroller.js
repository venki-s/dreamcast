const express = require("express");
const router = express.Router();
const Folio = require("./portfoliomodel");
const auth = require('../../fplan/utility/middleware/auth');
const logger = require('../utility/middleware/logging');

router.get("/", auth, async (req, res) => {

  logger.info('protfoliocontroller: getallfolios');
  const folios = await Folio.find();
  res.send(folios);
  
});

router.get("/:id", async (req, res) => {
  if (req.params && req.params.id) {
    const folio = await Folio.findById(req.params.id);

    if (!folio) {
      res.status(404).send("No folio found with given id");
    } else {
      res.send(folio);
    }
  } else {
    res.status(400).send("invalid id");
  }
});

router.post("/", async (req, res) => {
  if (!req.body || !req.body.name) {
    res.status(400).send("request body is empty");
  }

  const folio = new Folio(req.body);
  const result = await folio.save();

  res.send(result);
});

router.put("/:id", async (req, res) => {
  if (!req.body || !req.body.age) {
    res.status(400).send("request body is empty");
  }

  if (req.params && req.params.id) {
    let folio1 = await Folio.findById(req.params.id);

    if (!folio1) {
      res.status(404).send("No folio found with given id");
    } else {
      const keys = Object.keys(req.body);

      keys.forEach((key) => {
        folio1[key] = req.body[key];
      });

      const result = await folio1.save();
      res.send(result);
    }
  } else {
    res.status(400).send("invalid id");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.params && req.params.id) {
    const folio = await Folio.findById(req.params.id);

    if (!folio) {
      res.status(404).send("No folio found with given id");
    } else {
      const result = await folio.delete();
      res.send(result);
    }
  } else {
    res.status(400).send("invalid id");
  }
});

module.exports = router;
