import { MiddlewareFn } from "../interfaces/middleware";

import express = require("express");
import { sendFairbindenLunchMenuToSlack } from "../controllers/fairbinden";

export const fairbnRouter = express.Router();

/* Post a fairbinden request. */
fairbnRouter.post("/", <MiddlewareFn>function (req, res, next) {
  sendFairbindenLunchMenuToSlack(req, res, next);
});
