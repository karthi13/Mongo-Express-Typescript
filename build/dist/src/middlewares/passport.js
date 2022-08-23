"use strict";
const passport = require("passport");
const User = require("../models/User.model");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser((user, done) => {
    console.log(`User serilaizing ${user.username}`);
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    console.log(`User deserilaizing ${id}`);
    User.findById(id).then((user) => {
        done(null, user);
    });
});
const googleStrategyConfig = {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
    passReqToCallback: true,
};
passport.use(new GoogleStrategy(googleStrategyConfig, (request, accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        console.log('google strategy initialized', currentUser);
        if (currentUser) {
            // already have this user
            done(null, currentUser);
        }
        else {
            // if not, create user in our db
            new User({
                googleId: profile.id,
                username: profile.displayName
            }).save().then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
            });
        }
    });
}));
//# sourceMappingURL=passport.js.map