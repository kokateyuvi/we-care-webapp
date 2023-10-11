import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function POST(request) {
  try {
    connect();

    // Retrieve user email from the query parameters
    const { email } = await request.json();

    // Retrieve user details from the database based on the email
    const user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found.",
          status: false,
        },
        {
          status: 404,
        }
      );
    }

    // Return the user details
    return NextResponse.json(
      {
        user,
        status: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching user details by email:", error);
    return NextResponse.json({
      message: `Failed to fetch user details: ${error.message}`,
      status: false,
    });
  }
}
