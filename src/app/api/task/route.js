// taskRoute.js
import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function POST(request) {
  try {
    // Retrieve task details including status from the request body
    const { title, selectedDate, location, budget, userEmail, status } =
      await request.json();

    // Connect to the database
    connect();

    // Create a new task using the Task model and include userEmail and status
    const newTask = new Task({
      title,
      selectedDate,
      location,
      budget,
      userEmail,
      status, // Include the status field in the task object
    });

    // Save the new task to the database
    const savedTask = await newTask.save();

    // Send a success response with the saved task data
    return NextResponse.json(
      {
        message: "Task added successfully",
        status: true,
        task: savedTask, // Include the saved task data in the response
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    // Handle errors and send an error response
    return NextResponse.json({
      message: `Failed to add task: ${error.message}`,
      status: false,
    });
  }
}
