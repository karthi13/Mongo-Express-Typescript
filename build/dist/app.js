"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json('hello world');
});
// const createError = require('http-errors');
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session');
// const passport = require("passport");
// const cors = require('cors');
// const logger = require('morgan');
// const routes = require('./src/routes/index');
// require('dotenv/config');
// require('./src/configs/db.config');
// require('./src/middlewares/passport');
// const app = express();
// app.use('/', routes);
// // set up session cookies
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: ['secret doja cat'],
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors());
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.listen(4000, () => console.debug('Listening on port 4000'));
module.exports = app;
//# sourceMappingURL=app.js.map