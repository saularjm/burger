// Require express and set up router
const express = require("express");
let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");


// Export routes for server.js to use.
module.exports = router;