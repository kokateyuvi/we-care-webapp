import { httpAxios } from "@/libs/httpHelper";

export async function addTask(task) {
  const result = httpAxios
    .post("api/task", task)
    .then((response) => response.data);
  return result;
}
