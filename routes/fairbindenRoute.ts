import { MiddlewareFn } from "../interfaces/middlewareInterface";

const express = require("express");
const fairbindenController = require("../controllers/fairbindenController");

const router = express.Router();

/* Post a fairbinden request. */
router.post("/", <MiddlewareFn>function (req, res, next) {
  fairbindenController.sendFairbindenLunchMenuToSlack(req, res, next);
  res.send("success");
});

module.exports = router;
