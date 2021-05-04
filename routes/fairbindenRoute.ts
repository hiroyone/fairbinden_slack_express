import { MiddlewareFn } from "../interfaces/middlewareInterface";

const express = require("express");
const fairbindenController = require("../controllers/fairbindenController");

const router = express.Router();

/* Post a fairbinden request. */
router.post("/", function (req, res, next) {
  fairbindenController.sendFairbindenLunchMenuToSlack(req, res, next);
  res.send("success");
} as MiddlewareFn);

module.exports = router;
