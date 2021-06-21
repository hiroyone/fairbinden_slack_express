import createError from "http-errors";
import express = require("express");
import path = require("path");
import cookieParser = require("cookie-parser");
import morgan = require("morgan");
import { fairbnRouter } from "./routes/fairbinden";
import { HttpException } from "./interfaces/middleware";

// Logging Config
import pino = require("pino");
import expressPino = require("express-pino-logger");
const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const expressLogger = expressPino({ logger });

export const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// basic logger
app.use(morgan("tiny"));
app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/fairbinden", fairbnRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpException,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  logger.info("%O", req);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
