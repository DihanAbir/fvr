import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import AboutModal from "./AboutModal";

const AboutEgro = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="section_gap">
      <h2 className="aboutTheErgoStyleH2">
        About the
        <span className="aboutTheErgoStyleH2Span">ergonomics and hygiene</span>
        <br />
        Conference 2023
      </h2>

      <h6 className="aboutTheErgoStyleP">
        The Ergonomics and Hygiene 2023 Conference and Exhibition will be held
        on August 31, 2023 and September 1, 2022, from 9.00 a.m. to 5.00 p.m. at
        the Institute of Ergonomics and Hygiene (IEH). The environmental health
        pollution conference will be held in person, and it will not be streamed
        online. The aims of the Ergonomics and Hygiene 2023 Conference and
        Exhibition are for occupational hygienists, ergonomicists, and all other
        health and safety professionals to network and share their practices
        through a conference setting; explore current available solutions and
        technologies in hazard control and work productivity;
      </h6>

      <div onClick={handleShow}>
        <button className="aboutTheErgoStyleButton">
          Explore Conference Details
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <AboutModal />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AboutEgro;
