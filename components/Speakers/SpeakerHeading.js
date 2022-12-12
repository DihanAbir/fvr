import React from "react";
import Image from "next/image";
import radio from "../../public/speakers/icon/radio.png";

const SpeakerHeading = () => {
  return (
    <div className="">
      <div className="speaker d-flex align-items-center">
        <Image src={radio} />
        <h2 className="ms-4 fw-bold">This Year’s Speakers</h2>
      </div>

      <h6 className="spk_con">
        We believe a great speaker can change the world by their voice
      </h6>
    </div>
  );
};

export default SpeakerHeading;
