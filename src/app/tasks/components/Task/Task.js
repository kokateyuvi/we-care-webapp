import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import taskerImg from "./pic/avatar-trader.png";
import locationImg from "./pic/location.svg";
import dateImg from "./pic/date.svg";

const TaskCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 3px solid #5edefc;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 1.375rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TaskLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TaskBudget = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const TaskAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const TaskTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & img {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.875rem;
  }
`;

const TaskStatus = styled.div`
  &::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #5edefc;
    margin-right: 4px;
  }

  color: #5edefc;
  font-size: 1rem;
`;

const Task = (props) => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the detailed task page based on task ID
    router.push(`/tasks/${props.id}`);
  };

  return (
    <TaskCard>
      <TaskLink onClick={handleClick}>
        <TaskHeader>
          <TaskBudget>${props.budget}</TaskBudget>
          <TaskAvatar>
            <Image src={taskerImg} alt="Tasker Avatar" width={50} height={50} />
          </TaskAvatar>
        </TaskHeader>
        <TaskTitle>{props.title}</TaskTitle>
        <TaskInfo>
          <Image src={locationImg} alt="Location" width={16} height={16} />
          <span>{props.location}</span>
        </TaskInfo>
        <TaskInfo>
          <Image src={dateImg} alt="Date" width={16} height={16} />
          <span>{props.date}</span>
        </TaskInfo>
        <TaskStatus>{props.status}</TaskStatus>
      </TaskLink>
    </TaskCard>
  );
};

export default Task;
