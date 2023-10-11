import { NextResponse } from "next/server";
import connect from "../../../../db";
import { Task } from "@/models/taskModel";

export async function POST(request) {
  try {
    connect(); // Establish database connection

    // Retrieve user email from the request body
    const { userEmail } = await request.json();

    // Fetch tasks from the database based on the user's email
    const userTasks = await Task.find({ userEmail });

    // Return tasks as JSON response
    return NextResponse.json(
      {
        tasks: userTasks,
        status: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching user tasks:", error);
    // Handle errors and send an error response
    return NextResponse.json({
      message: `Failed to fetch tasks: ${error.message}`,
      status: false,
    });
  }
}
