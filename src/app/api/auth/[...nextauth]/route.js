import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/libs/mongodb";
import User from "@/models/userModel";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing and comparison

connectDb();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          // Find the user in the database based on the provided email
          const user = await User.findOne({ email: credentials.email });

          // If user not found, return null
          if (!user) {
            return null;
          }

          // Compare the provided password with the hashed password in the database using bcrypt.compare
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          // If password doesn't match, return null
          if (!passwordMatch) {
            return null;
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
