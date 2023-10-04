import React from "react";
import styled from "styled-components";

const TaskCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

const TaskTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TaskDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const TaskBudget = styled.div`
  font-weight: bold;
`;

const TaskCard = ({ title, description, budget, onClick }) => {
  return (
    <TaskCardContainer onClick={onClick}>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
      <TaskBudget>Budget: ${budget}</TaskBudget>
    </TaskCardContainer>
  );
};

export default TaskCard;
