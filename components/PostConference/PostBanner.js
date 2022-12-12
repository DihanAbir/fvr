import React from "react";
import { Container } from "react-bootstrap";
import ButtonTap from "../Exhibitors/ButtonTap";

const PostBanner = () => {
  return (
    <Container className="section_gap mt-5">
      <div className="d-flex flex-column flex-lg-row justify-content-between mb-5">
        <h2 className="accomodation_bluetitle">
          Post-conference workshop on ergonomics & hygiene
        </h2>
        <ButtonTap />
      </div>
      <p>
        Why are an increasing number of organizations, particularly in high-risk
        environmental health pollution sectors such as health care, aviation,
        shipping, oil, and gas, employing human factors experts to support
        investigations of accidents and health safety occurrences? Because human
        factors experts can add value to investigations They do this by using
        their scientific knowledge to ask good questions, gather information,
        interpret the findings, and make recommendations to improve safety.{" "}
        <br />  <br />
        Attendees with no prior knowledge of human factors will receive some
        foundation-level training in human factors applied to accident
        investigation during this environment health and hygiene workshop. Those
        already trained in human factors but with no experience in accident
        investigation will learn how to apply their skills in a new direction.
        <br />  <br />
        The ergonomics hygiene workshop is based on Dr. Bridger’s new book,
        Introduction to Human Factors in Accident Investigation. All delegates
        will receive a copy, which is included in the attendance fee, plus three
        months of complimentary associate membership in the Chartered Institute
        of Ergonomics and Human Factors.
      </p>
    </Container>
  );
};

export default PostBanner;
