'use strict';

/**
 * Expose
 */

const port = process.env.PORT || 3000;

module.exports = {
  db: "mongodb://" + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_HOST + ":" + (process.env.DATABASE_PORT || "27017") + "/" + process.env.DATABASE_NAME,
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: `http://localhost:${port}/auth/twitter/callback/`
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `http://localhost:${port}/auth/github/callback`
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: `http://localhost:${port}/auth/linkedin/callback`
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `http://localhost:${port}/auth/google/callback`
  }
};
