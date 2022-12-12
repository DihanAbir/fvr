import React from "react";
import Speakers from "./Speakers";

const PlenarySpeakers = () => {

  return (
    <div className="container">
      <h3 className="text-center title fw-bold">Plenary Speakers</h3>
      <Speakers minLength={6} maxLength={14}/>
    </div>
  );
};

export default PlenarySpeakers;
