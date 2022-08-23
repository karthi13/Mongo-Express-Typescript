"use strict";
var express = require('express');
var router = express.Router();
const expense = require('./expense');
const users = require('./users');
const apiDocs = require('./api-docs');
const auth = require('./auth');
router.use('/api/users', users);
router.use('/api/docs', apiDocs);
router.use('/auth', auth);
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({ title: 'Express' });
});
module.exports = router;
//# sourceMappingURL=index.js.map