import React from "react";
import Speakers from "./Speakers";

const KeynoteSpeakers = () => {
  return (
    <div className="container">
      <h3 className="text-center fw-bold title">Keynote Speakers</h3>
      <Speakers minLength={0} maxLength={6}/>
    </div>
  );
};

export default KeynoteSpeakers;
