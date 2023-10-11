import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import connect from "../../../../../db";

export async function POST(request) {
  try {
    const { task_id } = await request.json();
    // Get task_id from the route parameters

    connect();

    // Fetch the task from the database using the Task model and task_id
    const task = await Task.findOne({ _id: task_id });

    if (!task) {
      // If task with given task_id is not found, send a 404 response
      return NextResponse.json(
        {
          message: "Task not found",
          status: false,
        },
        {
          status: 404,
        }
      );
    }

    // Send a success response with the fetched task data
    return NextResponse.json(
      {
        message: "Task fetched successfully",
        status: true,
        task: task,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching task:", error);

    // Handle errors and send an error response
    return NextResponse.json(
      {
        message: `Failed to fetch task: ${error.message}`,
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
