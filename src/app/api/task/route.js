import { Task } from "@/models/taskModel";

import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function POST(request) {
  connect();
  const { title, selectedDate, location, budget } = await request.json();
  try {
    // Create a new task using the Task model
    const newTask = new Task({
      title,
      selectedDate,
      location,
      budget,
    });

    // Save the new task to the database
    const savedTask = await newTask.save();

    // Send a success response with the saved task data
    return NextResponse.json(
      {
        message: "Task added successfully",
        status: true,
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
