import React from "react";
import './Info.css';
import Image from "next/image";
import img1 from "../TaskComponent/elements/img1.jpg";
import vector from "../TaskComponent/elements/img1.jpg"; // Replace with the correct vector image

const Info = () => {
  return (
    <div className="clearfix infobox">
      <section className="left-info">
        <h1>Everyday Life Made Easier</h1>
        <p>When life gets busy, you dont have to tackle it alone.</p>
        <p>Get time back for what you love without breaking the bank.</p>
        <ul className="list">
          <li className="item">
            <div className="circle">
              <Image
                src={vector}
                alt="Choose Tasker by reviews, skills, and price"
                width={50}
                height={50}
              />
            </div>
            <span>Choose your Tasker by reviews, skills, and price</span>
          </li>
          <li className="item">
            <div className="circle">
              <Image
                src={vector}
                alt="Schedule when it works for you - as early as today"
                width={50}
                height={50}
              />
            </div>
            <span>Schedule when it works for you - as early as today</span>
          </li>
          <li className="item">
            <div className="circle">
              <Image
                src={vector}
                alt="Chat, pay, tip, and review all through one platform"
                width={50}
                height={50}
              />
            </div>
            <span>Chat, pay, tip, and review all through one platform</span>
          </li>
        </ul>
      </section>
      <section className="right-info">
        <Image
          src={img1}
          alt="Image for right info"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </section>
    </div>
  );
};

export default Info;
