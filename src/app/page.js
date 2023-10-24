import Info from "@/components/Home/components/Info/Info";
import TaskComponent from "@/components/Home/components/TaskComponent/TaskComponent";
import TaskDescriptionComponent from "@/components/Home/components/TaskDescriptionComponent/TaskDescriptionComponent";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <TaskComponent />
      <TaskDescriptionComponent />
      <Info/>
      <Toaster />
    </>
  );
}
