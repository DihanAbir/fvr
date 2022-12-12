import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="section_gap">
      <div className="bannerTextPart">
        <p className="navbarPtag">Conference & Exhibition</p>

        <Button
          className="border-0
       navbarPtagHotal"
        >
          31 August - 1 September 2022 | The Fullerton Hotel Singapore
        </Button>

        <h1 className="navbarH1Tag">
          Ergonomics & <br/> Hygienene <span className="navbarH1TagSpan">2023</span>
        </h1>

        <p className="navbarPtagHealth">
          Holistic approach to workplace health
        </p>

        <button className="navbarButtonRegisterPlace">Register Place</button>
      </div>
    </Container>
  );
};

export default Banner;
