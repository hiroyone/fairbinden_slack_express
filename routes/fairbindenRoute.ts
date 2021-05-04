import { MiddlewareFn } from "../interfaces/middlewareInterface";

const express = require("express");
const fairbindenController = require("../controllers/fairbindenController");

const router = express.Router();

/* GET users listing. */
router.get("/", <MiddlewareFn>function (req, res, next) {
  res.send("success");
});

router.post("/", fairbindenController.sendFairbindenLunchMenuToSlack);

module.exports = router;
