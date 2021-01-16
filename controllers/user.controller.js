const db = require("../models");
const config = require("../config/db.config");
const jwt = require("jsonwebtoken");

const User = db.users;
const Op = db.Sequelize.Op;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send({
      message: "email and password are required."
    });
  }

  User.findOne({ where: {email: email, password: password}})
    .then(data => {
      if (data) {
        const token = jwt.sign({id: data.id, password: data.password}, config.token_secret);
        res.header("auth-token", token).send({"token": token});
      } else {
        res.send({message: "Invalid Login"});
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

