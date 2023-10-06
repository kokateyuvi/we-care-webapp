import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    connect();
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already registered.",
          status: false,
        },
        {
          status: 400,
        }
      );
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    return NextResponse.json(
      {
        message: "You are registered successfully.",
        status: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({
      message: `Failed to add user: ${error.message}`,
      status: false,
    });
  }
}
