import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

const AccomodationCard = ({accomodation}) => {
  return (
    <div className="container">
      <div className="accomodation_card_bg pb-5 row g-5 my-5">
        <div className="col-12 col-lg-6">
          <p className="accomodation_bluetitle">{accomodation?.blueTitle}</p>
          <p className="accomodation_title">{accomodation?.title}</p>
          <p className="accomodation_content">
          {accomodation?.content1}
          </p>
          <p className="accomodation_content">
          {accomodation?.content2}
          </p>
          <p className="accomodation_content">
          {accomodation?.specialContent}
          </p>
          <a href=""><Button className="learn_more_btn border-0 fw-bold gap">Learn More</Button></a>
        </div>
        <div className="col-12 col-lg-6">
          <Image className="w-100" src={accomodation?.pic} />
        </div>
      </div>
    </div>
  );
};

export default AccomodationCard;
