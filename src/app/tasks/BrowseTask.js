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
import React, { useState } from "react";
import TaskCard from "./components/TaskCard/TaskCard";

const tasksData = [
  {
    id: 1,
    title: "Math Tutoring",
    description: "Help with algebra homework",
    budget: 20,
  },
  {
    id: 2,
    title: "English Essay Review",
    description: "Proofread my essay",
    budget: 15,
  },
  // Add more tasks here
];

const BrowseTask = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">Available Tasks</h1>
      <div className="flex flex-wrap -mx-4">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <TaskCard
              title={task.title}
              description={task.description}
              budget={task.budget}
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
          />
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
