import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Request, Response, NextFunction } from "express";
import { findOrCreateUser } from "src/handler/userHandler";
import prisma from "src/db/prismaClient";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Here you would find or create a user in your database
      // For simplicity, we'll just return the profile
      try {
        const user = await findOrCreateUser(
          profile.id,
          profile.displayName,
          profile.emails?.[0].value!,
          profile.photos?.[0].value ?? ""
        );
        return done(null, user);
      } catch (err) {
        return done(err, undefined);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, (user as any).id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
