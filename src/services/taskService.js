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
    const response = await httpAxios.get("/api/gettasks");
    return response.data.tasks; // Return only tasks from the response
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
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

export async function updateTask(taskId, updatedTaskData) {
  try {
    const response = await httpAxios.put(
      `/api/task/${taskId}`,
      updatedTaskData
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error updating task:", error);
    throw error;
  }
}

export async function deleteTask(taskId) {
  try {
    const response = await httpAxios.delete(`/api/task/${taskId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error deleting task:", error);
    throw error;
  }
}
