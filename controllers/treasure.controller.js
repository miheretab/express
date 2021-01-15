const db = require("../models");
const geolib = require('geolib');

const Treasure = db.treasures;
const MoneyValue = db.moneyvalues;
const Op = db.Sequelize.Op;

exports.findBoxes = (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const distance = req.query.distance;
  const prize_value = req.query.prize_value;

  if (!latitude || !longitude || !distance) {
    res.status(500).send({
      message:
        "latitude, longitude and distance are atleast required."
    });
  }

  var errors = [];
  if (!/^-?[\d.]+(?:e-?\d+)?$/.test(latitude)) {
    errors.push("invalid latitude value");
  }

  if (!/^-?[\d.]+(?:e-?\d+)?$/.test(longitude)) {
    errors.push("invalid longitude value");
  }

  if (!(distance == 1 || distance == 10)) {
    errors.push("invalid distance value");
  }

  if (prize_value && !(prize_value >= 10 && prize_value <= 30 && (prize_value % 1 == 0))) {
    errors.push("invalid prize value");
  }

  if (errors.length > 0) {
    res.status(500).send({
      message:
        errors.join(", ")
    });
  }

  Treasure.hasMany(MoneyValue, {
    foreignKey: 'treasure_id'
  });

  var condition = prize_value ? {amt: {[Op.gte]: prize_value}} : null;
  Treasure.findAll({ where: null, include: [{
        model: MoneyValue,
        required: prize_value,
        attributes: ["amt"],
        where: condition
      }],
      // order by amount asc
      order: [
        [MoneyValue, 'amt', 'ASC'],
      ]
    })
    .then(data => {
      // find treasure within a distance km radius from latitude, longitude given values
      var boxes = data.filter((treasure) => geolib.isPointWithinRadius(
          { latitude: treasure.latitude, longitude: treasure.longitude },
          { latitude: latitude, longitude: longitude },
          distance * 1000
        )
      );

      //get the first treasure
      var treasure = boxes.length > 0 ? boxes[0] : null;
      res.send(treasure ? {name: treasure.name, boxes: treasure.MoneyValues} : {});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving treasures."
      });
    });
};