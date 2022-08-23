import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';

/** Environment variables configuration **/
dotenv.config();

import Database from './src/configs/db.config';
import router from './src/routes';
import './src/middlewares/passport';

const app = express();

/**
 * Establish the MongoDB Database connection.
 */
Database.init();

/**
 * Middlewares
 */
app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
  }
}))

app.use(passport.initialize());
app.use(passport.session());

/**
 * Route
 */
app.use('/', router);
// app.get('/', (req: Request, res: Response): void => {
//   res.json('hello world');
// })


// const express = require('express');
// const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session');
// const passport = require("passport");
// const cors = require('cors');
// const logger = require('morgan');
// const routes = require('./src/routes/index');

// require('./src/configs/db.config');
require('./src/middlewares/passport');

// const app = express();

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

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(process.env.PORT!, () => console.debug('Listening on port 4000'));

module.exports = app;
