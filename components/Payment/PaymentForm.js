import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "../Exhibitors/Form/ConfirmSms";

const PaymentForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    {
      label: "Corporate",
      name: "option1",
    },
    {
      label: "Self Sponsored",
      name: "option2",
    },
  ];
  return (
    <Container className="section_gap">
      <div className="mb-5">
        <h2 className="accomodation_bluetitle ">Payment</h2>
        <p className="radioOption">
          Kindly ensure all the details you have provided is accurate as it will
          be reflected in the invoice.
        </p>
      </div>

      <Form>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Referral/Promo Code</Form.Label>{" "}
          <br />
          <Form.Label className="mb-3 radioOption">
            Please enter any promo/ referral code if applicable
          </Form.Label>
          <Form.Control
            className="inputField border-0"
            type="text"
            placeholder="Enter your answer"
          />
        </Form.Group>
        <div className="mb-5">
          <p className="fw-bold">Payment Method</p>
          <div className="d-flex flex-column flex-lg-row">
            {options.map((option, index) => (
              <div key={index} className="d-flex mb-3 me-4">
                <Form.Check
                  className="radioOption"
                  label={option.label}
                  name={option.name}
                  type="radio"
                />
              </div>
            ))}
          </div>
        </div>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label className="fw-bold">
            Invoice Attention to & Billing Address
          </Form.Label>{" "}
          <br />
          <Form.Label className="mb-3 radioOption">
            Kindly make sure the details provided are correct for us to generate
            the invoice where required.
          </Form.Label>
          <Form.Control
            className="textField border-0"
            type="text"
            as="textarea"
            rows={6}
            placeholder="Enter your answer"
          />
        </Form.Group>
        <div className="d-flex justify-content-between mt-5">
          <Button className="inputField border-0 text-muted px-5">Back</Button>

          <div onClick={handleShow}>
            <Button className="learn_more_btn text-white fw-bold">
              Submit
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="border-0" closeButton></Modal.Header>
            <Modal.Body>
              <ConfirmSms />
            </Modal.Body>
          </Modal>
        </div>
      </Form>
    </Container>
  );
};

export default PaymentForm;
