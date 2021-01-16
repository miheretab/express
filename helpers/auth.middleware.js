const config = require("../config/db.config");
const jwt = require("jsonwebtoken");

exports.loggedIn = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send("Access Denied");

    try {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, config.token_secret); 
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send(err.message + " " + token + " " +config.token_secret);
    }
}

