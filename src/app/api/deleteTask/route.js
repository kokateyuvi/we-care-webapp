// taskRoute.js
import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function DELETE(request) {
  try {
    const { taskId } = await request.json();

    const task = await Task.findById(taskId);
    connect();
    if (!task) {
      console.error(`Task with ID ${taskId} not found`);
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

    // Delete the task from the database
    await task.delete();

    return NextResponse.json({
      message: "Task deleted successfully",
      status: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: `Failed to delete task: ${error.message}`,
      status: false,
    });
  }
}
