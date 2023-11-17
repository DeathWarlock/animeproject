const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '1004065681415-rbcfcs793mhrpnhv2smbp1c0qhkms3jt.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://animeproject.onrender.com/api-docs/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});