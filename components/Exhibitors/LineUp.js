import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Partners from "./Partners";

const LineUp = () => {
  return (
    <Container className="section_gap">
      <h2 className="accomodation_bluetitle text-center mb-5">
        Exhibitor Line up
      </h2>

      <Partners />
    </Container>
  );
};

export default LineUp;
