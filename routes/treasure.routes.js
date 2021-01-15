module.exports = app => {
  const treasures = require("../controllers/treasure.controller.js");

  var router = require("express").Router();

  // Retrieve all Users
  router.get("/boxes", treasures.findBoxes);


  app.use('/api/treasure', router);
};