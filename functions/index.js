const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");

exports.helloWorld = onRequest((req, res) => {
  logger.info("Hello, Firebase Functions!", {structuredData: true});
  res.send("Hello from Firebase!");
});
