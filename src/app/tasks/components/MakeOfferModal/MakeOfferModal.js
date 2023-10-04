import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Bronze from "./pic/bronze.png";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Modal = styled.div`
  width: 90vw;
  max-width: 400px;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  background: #f3d250;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Close = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  font-weight: 200;
  position: absolute;
  top: 0;
  right: 2.25rem;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 1rem 2.25rem;
`;

const Offer = styled.div`
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  span {
    border: 1px solid #c4c4c4;
    border-right: 0;
    padding: 1rem;
  }
`;

const OfferInput = styled.input`
  border: 1px solid #c4c4c4;
  line-height: 58px;
  text-align: center;
  width: 30%;
`;

const ServiceFee = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125rem;
  padding-bottom: 0.5rem;
  span {
    float: right;
  }
`;

const ReceiveFee = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.125rem;
  padding-bottom: 0.5rem;
  span {
    float: right;
  }
`;

const ServiceTier = styled.div`
  background: #f3d250;
  margin: 1.625rem -2.25rem;
  padding: 2.625rem 2.25rem 1rem;
  text-align: center;
  div {
    padding: 1.125rem 0;
  }
`;

const ServiceTerms = styled.a`
  display: block;
  padding: 1rem 2.25rem;
  color: #feffff;
`;

const Footer = styled.div`
  padding: 1.625rem 2.25rem;
`;

const SubmitButton = styled.button`
  outline: 0;
  border: 3px solid #000000;
  border-radius: 90px;
  background: #f3d250;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 2.875rem;
`;

const MakeOfferModal = ({ task, onClose }) => {
  const [offerAmount, setOfferAmount] = useState("");

  const handleOfferChange = (e) => {
    setOfferAmount(e.target.value);
  };

  const submitTask = () => {
    // TODO: Handle task submission with offerAmount
    console.log("Offer Submitted:", offerAmount);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <Header>
          <Title>Make an Offer</Title>
          <Close onClick={onClose}>X</Close>
        </Header>
        <Body>
          <Offer>
            Your offer
            <div>
              <span>$</span>
              <OfferInput
                type="number"
                value={offerAmount}
                onChange={handleOfferChange}
                placeholder="Enter amount"
              />
            </div>
          </Offer>
          <ServiceFee>
            Bronze service fee<span>-$8.80</span>
          </ServiceFee>
          <ReceiveFee>
            Youll receive<span>$31.20</span>
          </ReceiveFee>
          <ServiceTier>
            <div>Great work - earn more and enjoy a lower service fee!</div>
            <Image src={Bronze} alt="Bronze Tier" width={90} height={90} />
            <div>Your last 30-day total: $0</div>
            <div>Your current tier: Bronze</div>
            <ServiceTerms href="#">
              Find out how your service fee is calculated
            </ServiceTerms>
          </ServiceTier>
        </Body>
        <Footer>
          <SubmitButton onClick={submitTask}>Submit</SubmitButton>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default MakeOfferModal;
