"use strict";
var express = require('express');
const passport = require("passport");
var router = express.Router();
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', (req, res) => {
    res.json('you reached callback', req.user);
});
router.get("/good", (req, res) => res.json(`You logged in! Welcome ${req.user.email}`));
router.get("/bad", (req, res) => res.json("You failed to log in!"));
module.exports = router;
//# sourceMappingURL=auth.js.map