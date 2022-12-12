import React from "react";
import facebook from "../../public/speakers/icon/Facebook.png";
import instagram from "../../public/speakers/icon/instagram.png";
import twitter from "../../public/speakers/icon/twitter.png";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsTwitter} from "react-icons/bs";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <Card className="speakers border-0">
        <div className="speakerImg">
              <Image className="ppp" src={speaker.pic} alt="image" />
              <div className="speaker__hov">
                <p>
                  {speaker.designation} <strong>{speaker.institude}</strong>
                </p>
                <p>
                  Principle Scientest at <strong>IOM in Edinburgh</strong>{" "}
                </p>
              </div>
        </div>
        <Card.Body className="text-center">
          <Card.Title className="name fw-bold">{speaker.name}</Card.Title>
          <Card.Text className="designation">
            {speaker.designation}{" "}
            <span className="fw-bold">{speaker.institude}</span>
          </Card.Text>
          {/* <div className="icon d-flex align-items-center justify-content-center text-white">
            <a href="">
              {" "}
              <Image className="" src={facebook} />
            </a>
            <a href="">
              {" "}
              <Image src={instagram} />
            </a>
            <a href="">
              {" "}
              <Image src={twitter} />
            </a>
          </div> */}
          <div className="icon d-flex align-items-center justify-content-center text-white">
            <a href="">
              {" "}
              <CgFacebook/>
            </a>
            <a href="">
              {" "}
              <BsInstagram/>
            </a>
            <a href="">
              {" "}
              <BsTwitter/>
            </a>
          </div>
        </Card.Body>

        
      </Card>
    </div>
  );
};

export default SpeakerCard;
