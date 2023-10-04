import TaskComponent from "@/components/Home/components/TaskComponent/TaskComponent";
import TaskDescriptionComponent from "@/components/Home/components/TaskDescriptionComponent/TaskDescriptionComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TaskComponent />
      <TaskDescriptionComponent />
    </>
  );
}
