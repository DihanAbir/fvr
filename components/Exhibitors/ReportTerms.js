import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import redIcon from "../../public/icons/red-list.png";

const ReportTerms = () => {
  return (
    <Container className="reportTerm section_gap">
      <div className="d-flex align-items-center">
        <Image className="me-3" src={redIcon} alt="icon" />
        <p className="m-0">
          Never give out your password. <a href="">Report abuse</a>{" "}
        </p>
      </div>

      <hr className="my-5" />
      <p>
        This content is created by the owner of the form. The data you submit
        will be sent to the form owner. Microsoft is not responsible for the
        privacy or security practices of its customers, including those of this
        form owner. Never give out your password.
      </p>
      <h5>Powered by Microsoft Forms </h5>
      <p>
        The owner of this form has not provided a privacy statement as to how
        they will use your response data. Do not provide personal or sensitive
        information. <a href="">Terms of use</a>{" "}
      </p>
    </Container>
  );
};

export default ReportTerms;
