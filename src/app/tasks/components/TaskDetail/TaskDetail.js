import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Task from "../Task/Task";
import MakeOfferModal from "../MakeOfferModal/MakeOfferModal";
import locationImg from "./pic/location.svg";
import dateImg from "./pic/date.svg";

const TaskDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const TaskStatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
`;

const TaskStatus = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 0.625rem;
    height: 0.625rem;
    background-color: rgba(94, 222, 252, 0.5);
    margin-right: 0.5rem;
  }
`;

const TaskTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
  padding: 1.5rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
`;

const TaskDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TaskDetailColumn = styled.div`
  width: calc(50% - 1rem);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const TaskDetailTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const TaskDetailContent = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
`;

const TaskImage = styled(Image)`
  border-radius: 10px;
`;

const MakeOfferButton = styled.button`
  background-color: #5edefc;
  border: 3px solid #000000;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2.5rem;
  padding: 0 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4ad5e6;
  }
`;

const TaskDetailComponent = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <TaskDetailContainer>
      <TaskStatusContainer>
        <TaskStatus>Open</TaskStatus>
        <TaskStatus>Assigned</TaskStatus>
        <TaskStatus>Completed</TaskStatus>
      </TaskStatusContainer>

      <TaskTitle>{props.title}</TaskTitle>

      <TaskDetailsContainer>
        <TaskDetailColumn>
          <TaskDetailTitle>Task Budget</TaskDetailTitle>
          <TaskDetailContent>${props.budget}</TaskDetailContent>
        </TaskDetailColumn>

        <TaskDetailColumn>
          <TaskDetailTitle>Posted By</TaskDetailTitle>
          <TaskDetailContent>{props.name}</TaskDetailContent>
        </TaskDetailColumn>

        <TaskDetailColumn>
          <TaskDetailTitle>Location</TaskDetailTitle>
          <TaskDetailContent>
            <Image src={locationImg} alt="Location" width={20} height={25} />
            {props.location}
          </TaskDetailContent>
        </TaskDetailColumn>

        <TaskDetailColumn>
          <TaskDetailTitle>Date</TaskDetailTitle>
          <TaskDetailContent>
            <Image src={dateImg} alt="Date" width={25} height={25} />
            {props.date}
          </TaskDetailContent>
        </TaskDetailColumn>
      </TaskDetailsContainer>

      <TaskDetailColumn>
        <TaskDetailTitle>Task Details</TaskDetailTitle>
        <TaskDetailContent>{props.details}</TaskDetailContent>
      </TaskDetailColumn>

      {/* <TaskDetailColumn>
        <TaskDetailTitle>Task Images</TaskDetailTitle>
        {props.images.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "75%",
            }}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </TaskDetailColumn> */}

      <MakeOfferButton onClick={() => setShowModal(true)}>
        Make an Offer
      </MakeOfferButton>

      {showModal && (
        <MakeOfferModal
          task={props}
          onClose={() => setShowModal(false)}
        ></MakeOfferModal>
      )}
    </TaskDetailContainer>
  );
};

export default TaskDetailComponent;
