import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import ConfirmSms from "../Exhibitors/Form/ConfirmSms";
import PaymentForm from "../Payment/PaymentForm";
import PostPayment from "../PostConference/PostPayment";

const RegistrationForm = () => {
  const options = [
    {
      label: "Association Member",
      name: "option1",
    },
    {
      label: "Student",
      name: "option2",
    },
    {
      label: "Not Applicable",
      name: "option3",
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const option = [
    {
      label: "Corporate",
      name: "option1",
    },
    {
      label: "Self Sponsored",
      name: "option2",
    },
  ];
  // form show function

  const [steeper, setSteeper] = useState(0);

  const NextHandler = () => {
    setSteeper(steeper + 1);
  };
  const prevHandler = () => {
    steeper < 0 && setSteeper(0);
    setSteeper(steeper - 1);
  };
  return (
    <Container className="section_gap">
      {steeper === 0 ? (
        <Form>
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">Salutation</Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                >
                  <option>Enter your answer</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Email</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="email"
                  placeholder="Enter your Email"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Company Name</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your Answer"
                />
              </Form.Group>
              <div>
                <p className="fw-bold">Membership Type</p>
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
                <Form.Label className="fw-bold mb-3">
                  Are you registering Individually or for a group?
                </Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                >
                  <option>Select your answer</option>
                  <option value="1">Individual</option>
                  <option value="2">Group</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">
                  How many attendees are there in your group?
                </Form.Label>
                <Form.Select
                  className="mb-5 inputField border-0"
                  aria-label="Default select example"
                >
                  <option>Select your answer</option>
                  <option value="1">4</option>
                  <option value="2">5</option>
                  <option value="2">7</option>
                  <option value="2">9</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-12 col-lg-6">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="fw-bold mb-3">
                  Name (First & Last Name only)
                </Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Designation</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Contact Number</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="number"
                  placeholder="Enter your answer"
                />
              </Form.Group>
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
      ) : (
        <Container className="section_gap">
          <div className="mb-5">
            <h2 className="accomodation_bluetitle ">Payment</h2>
            <p className="radioOption">
              Kindly ensure all the details you have provided is accurate as it
              will be reflected in the invoice.
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
                {option.map((optn, index) => (
                  <div key={index} className="d-flex mb-3 me-4">
                    <Form.Check
                      className="radioOption"
                      label={optn.label}
                      name={optn.name}
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
                Kindly make sure the details provided are correct for us to
                generate the invoice where required.
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
              {steeper === 0 ? null : (
                <Button
                  onClick={prevHandler}
                  className="inputField border-0 text-muted px-5"
                >
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
          </Form>
        </Container>
      )}
    </Container>
  );
};

export default RegistrationForm;
