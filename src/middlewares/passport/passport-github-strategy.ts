import passport from "passport";
import User from '../../models/User.model';
import { Strategy, StrategyOptions } from 'passport-github2';

passport.serializeUser((user: any, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id: any, done) => {
  console.log(`User deserilaizing ${id}`);
  User.findById(id).then((user: any) => {
    done(null, user.id);
  });
});

const githubStrategyConfig: StrategyOptions = {
  clientID: process.env.GITHUB_OAUTH_CLIENT_ID!,
  clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET!,
  callbackURL: process.env.GITHUB_OAUTH_CALLBACK_URL!,
};

passport.use(new Strategy(githubStrategyConfig,
  (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
    console.log(profile);
    // done(null, profile);
    User.findOne({githubId: profile.id}).then((currentUser) => {
      console.log('google strategy initialized', currentUser);
      if(currentUser){
          // already have this user
          done(null, currentUser);
      } else {
          // if not, create user in our db
          new User({
              githubId: profile.id,
              username: profile.userName,
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