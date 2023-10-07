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
