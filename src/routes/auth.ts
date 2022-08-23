// var express = require('express');
// const passport = require('passport');
// var router = express.Router();

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// router.get('/google/callback',
//  passport.authenticate('google', { failureRedirect: '/login' }), 
// (req, res) => {
//   console.log('req ->', req.user);
//     res.redirect('/auth/good');
// });

// router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// router.get('/github/callback',
//  passport.authenticate('github', { failureRedirect: '/login' }), 
// (req, res) => {
//   console.log('req ->', req.user);
//     res.redirect('/auth/good');
// });

// router.get('/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));

// router.get('/linkedin/callback',
//  passport.authenticate('linkedin', { failureRedirect: '/login' }), 
// (req, res) => {
//   console.log('req ->', req.user);
//     res.redirect('/auth/good');
// });

// router.get("/good", (req, res) => {
//   res.send(req.user);
// });

// router.get("/bad", (req, res) => res.json("You failed to log in!"));

// module.exports = router;