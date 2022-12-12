import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import listIcon from "../../public/icons/list.png";
import ButtonTap from "./ButtonTap";

const ExhibitorBanner = () => {

  return (
    <Container className="mt-5 section_gap">
      <div className="row g-5">
        <div className="col-12 col-lg-8">
          <h2 className="accomodation_bluetitle">Ergonomics and hygiene Exhibition</h2>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />
             <p className="m-0">Entry is Free of Charge</p>
          </div>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />{" "}
            <p className="m-0">
              Ergonomics and hygiene Exhibition Attendees are entitled entry to
              the Exhibition halls only.
            </p>
          </div>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />{" "}
            <p className="m-0">
              Register as a <a href="">ergonomics hygiene conference</a>{" "}
              delegate to gain full access.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <ButtonTap/>
        </div>
      </div>
    </Container>
  );
};

export default ExhibitorBanner;
