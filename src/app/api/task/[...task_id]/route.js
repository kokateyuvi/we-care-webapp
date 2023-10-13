// taskRoute.js
import { Task } from "@/models/taskModel";
import { NextResponse } from "next/server";
import connect from "../../../../../db";

export async function PUT(request) {
  try {
    const { taskId, status } = await request.json();
    connect();
    const task = await Task.findById(taskId);

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

    task.status = status;
    const updatedTask = await task.save();

    return NextResponse.json({
      message: "Task status updated successfully",
      status: true,
      task: updatedTask,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: `Failed to update task status: ${error.message}`,
      status: false,
    });
  }
}
