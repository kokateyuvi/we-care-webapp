import { Task } from "@/models/taskModel";
import connect from "../../../../db";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { taskId, taskStatus } = await request.json();
    connect(); // Ensure database connection (consider moving this to a higher-level middleware if necessary)

    // Find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      console.error(`Task with ID ${taskId} not found`);
      return NextResponse.json(
        { message: "Task not found", status: false },
        { status: 404 }
      );
    }

    // Update task status and save to the database
    task.status = taskStatus;
    const updatedTask = await task.save();

    // Respond with success message and updated task data
    return NextResponse.json({
      message: "Task status updated successfully",
      status: true,
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error updating task:", error);

    // Handle any server-side errors and respond with an error message
    return NextResponse.json({
      message: `Failed to update task status: ${error.message}`,
      status: false,
    });
  }
}
