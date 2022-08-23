import passport from "passport";
import User from '../../models/User.model';

import { Strategy, StrategyOptionWithRequest } from 'passport-linkedin-oauth2';

const linkedInStrategyConfig: StrategyOptionWithRequest = {
    clientID: process.env.LINKEDIN_OAUTH_CLIENT_ID!,
    clientSecret: process.env.LINKEDIN_OAUTH_CLIENT_SECRET!,
    callbackURL: process.env.LINKEDIN_OAUTH_CALLBACK_URL!,
    scope: ['r_emailaddress', 'r_liteprofile'],
    passReqToCallback: true,
};
  
  passport.use(new Strategy(linkedInStrategyConfig,
    (request: any, accessToken: any, refreshToken: any, profile: passport.Profile, done: any) => {
      console.log(profile);
      // done(null, profile);
      User.findOne({likedinId: profile.id}).then((currentUser) => {
        console.log('linkedIn strategy initialized', currentUser);
        if(currentUser){
            // already have this user
            done(null, currentUser);
        } else {
            // if not, create user in our db
            new User({
                linkedId: profile.id,
                username: profile.username,
                displayName: profile.displayName,
                avatar: profile.photos?.[0]?.value,
            }).save().then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);
            });
        }
    });
    }
  ));