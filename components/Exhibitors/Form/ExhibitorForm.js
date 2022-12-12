import Image from "next/image";
import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "./ConfirmSms";

const ExhibitorForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form show function

  const [steeper, setSteeper] = useState(0);

  const NextHandler = () => {
    setSteeper(steeper + 1);
  };
  const prevHandler = () => {
    steeper < 0 && setSteeper(0);
    setSteeper(steeper - 1);
  };

  const options = [
    {
      label: "Day 1 Wed (31 Aug)",
      name: "option1",
    },
    {
      label: "Day 2 Thu (1 Sept)",
      name: "option2",
    },
    {
      label: "Both Days (31 Aug & 1 Sept)",
      name: "option3",
    },
  ];
  return (
    <Container className="section_gap">
      <h2 className="accomodation_bluetitle text-center mb-5">
        Fill up the form
      </h2>

      {steeper === 0 ? (
        <Form>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Name</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Contact</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="number"
                  placeholder="Enter your answer"
                />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Email address</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="email"
                  placeholder="Enter your answer"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Company</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>
            </div>
          </div>

          <div>
            <p className="fw-bold">
              Which day(s) will you be attending the exhibition?
            </p>
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

          <div className="d-flex justify-content-between mt-5">
            <Button className="inputField border-0 text-muted px-5">
              Save as Draft
            </Button>
            <Button
             onClick={NextHandler}
              className="learn_more_btn text-white fw-bold"
            >
              Next
            </Button>
          </div>
        </Form>
      ) : steeper === 1 ? (
        <div className="my-5">
          <Form>
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Referral code</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>
            </div>
          </Form>
          <div className="d-flex justify-content-between mt-5">
          {steeper === 0 ? null : (
            <Button  onClick={prevHandler} className="inputField border-0 text-muted px-5">
            Back
          </Button>
          )}
           
            <Button
            onClick={NextHandler} className="learn_more_btn text-white fw-bold">Next</Button>
          </div>
        </div>
      ) :  (
        <div className="my-5">
          <h2 className="accomodation_bluetitle">Agreement</h2>
          <p className="fw-bold mt-5 mb-3">
            In addition, if you would like to receive future marketing materials
            from IEH, not limited to the Ergonomics & Hygiene 2022 conference
            and exhibition, kindly give your consent below.
          </p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label radioOption" for="flexRadioDefault1">
              I wish to receive marketing materials from IEH in the future
            </label>
          </div>
          <div className="d-flex justify-content-between mt-5">
          {steeper === 0 ? null : (
            <Button  onClick={prevHandler} className="inputField border-0 text-muted px-5">
            Back
          </Button>
          )}

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
        </div>
      )}

      {/* Agreement code part start*/}
    </Container>
  );
};

export default ExhibitorForm;
