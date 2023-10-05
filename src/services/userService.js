import { httpAxios } from "@/libs/httpHelper";

export async function addUser(formData) {
  const result = httpAxios
    .post("api/signup", formData)
    .then((response) => response.data);
  return result;
}
