import Image from "next/image";
import React from "react";
import { Button, Placeholder } from "react-bootstrap";
import confirm from "../../../public/icons/confirmation.png";

const ConfirmSms = () => {
  return (
    <div className="text-center">
      <Button className="learn_more_btn fw-bold mb-5">
        Ergonomics and Hygiene Exhibition
      </Button>
      <p className="confirm">
        Thank you for registering for the Ergonomics and Hygiene <br />
        2022 Exhibition
      </p>
      <p className="text-muted">
        A confirmation email will be sent after submission. We will then send
        you an invoice within 1 <br /> working day and advice on the mode of
        payment.
      </p>
      <Image className="my-4" src={confirm} alt="confirm" />
      <p  className="text-muted">You can print a copy of your answer after you submit.</p>
      <div className="d-flex justify-content-center mt-5">
        <Button className="inputField border-0 text-muted px-5 me-4">
          Back
        </Button>
        <Button className="submit_btn px-4 text-white fw-bold">
          Submitted
        </Button>
      </div>
    </div>
  );
};

export default ConfirmSms;
