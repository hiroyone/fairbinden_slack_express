#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { app } from "../app";
import Debug = require("debug");
const debug = Debug("fairbinden-slack-express:server");
import http = require("http");
import dotenv from "dotenv";
dotenv.config();

console.log(`Environment: ${process.env.NODE_ENV}`);

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => {
  console.log("Server running on port %d", port);
});

server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port; // addr is not null for sure, so ! is added
  // logger.info("Server running on port %d", port);
  debug("Listening on " + bind);
}
