import React from "react";
import { Container } from "react-bootstrap";

const HealthManagement = () => {
  const healthMAnage = [
    {
      time: "9.00 AM",
      content1: "Registration of the",
      content2: "Post Conference Workshop",
      classname: "time",
    },
    {
      time: "9.15 AM",
      content1: "Opening Guest Speaker ",
      content2: "  Amerali Abdeali (Singapore)",
      classname: "text-end time",
    },
  ];
  return (
    <Container className="">
      <h2 className="text-center program_title">
        Health Management in Today’s Workplace
      </h2>
      <div className="d-flex justify-content-between">
        {healthMAnage.map((health, index) => (
          <div className={health?.classname} key={index}>
            <h4>{health.time}</h4>
            <p>{health.content1}</p>
            <p>{health.content2}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HealthManagement;
