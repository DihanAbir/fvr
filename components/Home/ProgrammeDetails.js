import React from "react";
import { Button, ButtonGroup, Container, Nav } from "react-bootstrap";

const ProgrammeDetails = () => {
  const buttons = [
    {
      btnName: "Day 1",
      className: "learn_more_btn",
    },
    {
      btnName: "Day 2",
      className: "exhibitor_btn",
    },
  ];
  return (
    <Container>
      <div className="text-center">
        <h2 className="program_title">Programme Details</h2>
        <h6 className="mute_content">
          Hands-on sessions with Apoint experts that are hosted in The Fulertone
          Hotel Singapore on May 3 (9am - 5pm).
        </h6>
      </div>
      <div className="text-center btngrp">
        <ButtonGroup aria-label="Basic example">
          {buttons.map((btn, index) => (
            <Button key={index} className={btn.className}>
              {btn.btnName}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default ProgrammeDetails;
