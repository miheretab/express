module.exports = app => {
  const treasures = require("../controllers/treasure.controller.js");
  const {loggedIn} = require("../helpers/auth.middleware");

  var router = require("express").Router();

  // Retrieve all Users
  router.get("/boxes", loggedIn, treasures.findBoxes);


  app.use('/api/treasure', router);
};