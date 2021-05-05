import { MiddlewareFn } from "../interfaces/middlewareInterface";

import express = require("express");
import { sendFairbindenLunchMenuToSlack } from "../controllers/fairbindenController";

const router = express.Router();

/* Post a fairbinden request. */
router.post("/", <MiddlewareFn>function (req, res, next) {
  sendFairbindenLunchMenuToSlack(req, res, next);
  res.send("success");
});

module.exports = router;
