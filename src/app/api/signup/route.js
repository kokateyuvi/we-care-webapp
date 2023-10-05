import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function POST(request) {
  connect();
  const { name, email, password } = await request.json();
  try {
    // Parse request body to extract form data

    // Validate form data (you can use a validation library like Joi or Express Validator)

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
      password,
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
