import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import ButtonTap from "../Exhibitors/ButtonTap";
import listIcon from "../../public/icons/list.png";

const Registrationbanner = () => {
  const paragraph = [
    {
      para: "Entry is Chargeable as per the price list below",
    },
    {
      para: "Entry to both Conference and Exhibition halls ",
    },
    {
      para: "Lunch is provided",
    },
    {
      para: "Delegate goodie bag (worth $50)",
    },
    {
      para: "12 SDU Points",
    },
    {
      para: "8 RIH Points",
    },
    {
      para: "Register below",
    },
  ];
  return (
    <Container className="mt-5 section_gap">
      <div className="row g-5">
        <div className="col-12 col-lg-8">
          <h2 className="accomodation_bluetitle">
            Ergonomics and hygiene conference Registration
          </h2>
          <div>
            {paragraph.map((p, index) => (
              <div
                className="d-flex align-items-center exhibitor_content"
                key={index}
              >
                <Image className="me-3" src={listIcon} alt="list" />
                <p className="m-0">{p.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <ButtonTap />
        </div>
      </div>
    </Container>
  );
};

export default Registrationbanner;
