import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/userModel";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing and comparison
import connect from "../../../../../db";

connect();

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          // Find the user in the database based on the provided email
          const user = await User.findOne({ email: credentials.email });

          // If user not found, return null
          if (!user) {
            throw new Error("Invalid email or Password");
          }

          // Compare the provided password with the hashed password in the database using bcrypt.compare
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          // If password doesn't match, return null
          if (!passwordMatch) {
            throw new Error("Invalid email or password");
          }

          // If user is found and password matches, return the user object
          return user;
        } catch (error) {
          // Handle errors (e.g., database connection issues)
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
