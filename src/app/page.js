import TaskComponent from "@/components/Home/components/TaskComponent/TaskComponent";
import TaskDescriptionComponent from "@/components/Home/components/TaskDescriptionComponent/TaskDescriptionComponent";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <TaskComponent />
      <TaskDescriptionComponent />
      <ToastContainer />
    </>
  );
}
