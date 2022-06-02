'use strict';

/**
 * Expose
 */

module.exports = {
  db: "mongodb://" + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_HOST + ":" + (process.env.DATABASE_PORT || "27017") + "/" + process.env.DATABASE_NAME,
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL:
      'https://nodejs-express-demo.herokuapp.com/auth/twitter/callback/'
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL:
      'https://nodejs-express-demo.herokuapp.com/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL:
      'https://nodejs-express-demo.herokuapp.com/auth/linkedin/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL:
      'https://nodejs-express-demo.herokuapp.com/auth/google/callback'
  }
};
