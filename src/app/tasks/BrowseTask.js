// "use client";
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// import Task from "./components/Task/Task";
// import TaskDetail from "./components/TaskDetail/TaskDetail";
// import axios from "axios";

// const BrowseTaskContainer = styled.div`
//   margin: 3rem auto 2rem;
//   width: 90vw;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const TaskContainer = styled.div`
//   width: 100%;
//   overflow-y: scroll;
//   max-height: 70vh;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   background-color: #ffffff;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }
//   &::-webkit-scrollbar-track {
//     background: #ffffff;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #5edefc;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background: #5edefc;
//   }
// `;

// const TaskDetailContainer = styled.div`
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 1rem;
//   background-color: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const BrowseTask = () => {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState(null);

//   useEffect(() => {
//     async function fetchTasks() {
//       try {
//         const response = await axios.get("/task/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       <BrowseTaskContainer>
//         <TaskContainer>
//           {tasks.map((task) => (
//             <Task
//               key={task.id}
//               {...task}
//               onClick={() => setCurrentTask(task)}
//             />
//           ))}
//         </TaskContainer>
//         <TaskDetailContainer>
//           <TaskDetail {...currentTask} />
//         </TaskDetailContainer>
//       </BrowseTaskContainer>
//     </div>
//   );
// };

// export default BrowseTask;
"use client";
// BrowseTask.js
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import { getAllTasks } from "@/services/taskService";

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData(); // Fetch tasks when the component mounts
  }, []);

  return (
    <div className="container px-4 mx-auto my-8">
      <h1 className="mb-6 text-4xl font-bold">Available Tasks</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map((task) => (
          <div key={task._id} className="w-full">
            <TaskCard
              title={task.title}
              description={task.description}
              budget={task.budget}
              location={task.location}
              selectedDate={task.selectedDate}
              onClick={() => setSelectedTask(task)}
            />
          </div>
        ))}
      </div>
      {selectedTask && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Selected Task</h2>
          <TaskCard
            title={selectedTask.title}
            description={selectedTask.description}
            budget={selectedTask.budget}
            location={selectedTask.location}
            selectedDate={selectedTask.selectedDate}
          />
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
