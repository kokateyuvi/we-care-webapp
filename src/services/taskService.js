import { httpAxios } from "@/libs/httpHelper";

export async function addTask(task) {
  try {
    const response = await httpAxios.post("/api/task", task);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error adding task:", error);
    throw error;
  }
}

export async function getAllTasks() {
  try {
    const response = await httpAxios.post("/api/gettasks");
    return response.data.tasks; // Return only tasks from the response
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}
export async function getOneTask(task_id) {
  try {
    const response = await httpAxios.post(`/api/getonetask`, {
      task_id: task_id,
    });

    return response.data.task; // Return only the first task from the response
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error; // Rethrow the error so that it can be handled by the caller
  }
}
export async function getUserTasks(userEmail) {
  try {
    const response = await httpAxios.post("/api/get-user-tasks", {
      userEmail: userEmail,
    });

    return response.data.tasks; // Return only tasks from the response
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function updateTask(taskId, taskStatus) {
  try {
    // Ensure status is set to "COMPLETED" before sending the update

    // Send the updated data to the server using Axios
    const response = await httpAxios.put(`/api/updateTaskStatus`, {
      taskId: taskId,
      taskStatus: taskStatus,
    });

    // Check if the request was successful
    if (response.status === 200) {
      // Return the updated task data from the server response
      return response.data;
    } else {
      // Handle unexpected status codes from the server
      console.error("Error updating task. Unexpected status:", response.status);
      throw new Error("Failed to update task. Unexpected status code.");
    }
  } catch (error) {
    // Handle Axios errors and other exceptions
    console.error("Error updating task:", error);
    throw error; // Rethrow the error for the calling code to handle
  }
}

// Client-side code
export async function deleteTask(taskId) {
  try {
    // Send the taskId as data in the request body
    const response = await httpAxios.delete(`/api/deleteTask`, {
      data: { taskId: taskId }, // Send the taskId in the request body
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error deleting task:", error);
    throw error;
  }
}
