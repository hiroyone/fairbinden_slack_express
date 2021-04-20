import { MiddlewareFn } from "../interfaces/middlewareInterface";

const express = require("express");
const { fairbinden } = require("../controllers");

const router = express.Router();

/* GET users listing. */
router.get("/", <MiddlewareFn>function (req, res, next) {
  res.send("success");
});

router.post("/", fairbinden.sendToSlack);

module.exports = router;
