import { MiddlewareFn } from "../interfaces/middlewareInterface";

import express = require("express");
import { sendFairbindenLunchMenuToSlack } from "../controllers/fairbindenController";

export const fairbnRouter = express.Router();

/* Post a fairbinden request. */
fairbnRouter.post("/", <MiddlewareFn>function (req, res, next) {
  sendFairbindenLunchMenuToSlack(req, res, next);
});
