import React from "react";
import facebook from "../../public/speakers/icon/Facebook.png";
import instagram from "../../public/speakers/icon/instagram.png";
import twitter from "../../public/speakers/icon/twitter.png";
import jhon from "../../public/speakers/keynote/jhon.png";
import robert from "../../public/speakers/keynote/robert.png";
import jason from "../../public/speakers/keynote/jeson.png";
import joanne from "../../public/speakers/keynote/joanne.png";
import mila from "../../public/speakers/keynote/mila.png";
import Norhazlina from "../../public/speakers/keynote/norhajlina.png";
import marcel from "../../public/speakers/plenary/marcel.png";
import miranda from "../../public/speakers/plenary/miranda.png";
import zephan from "../../public/speakers/plenary/zephan.png";
import karanika from "../../public/speakers/plenary/karanika.png";
import jai from "../../public/speakers/plenary/jai.png";
import lee from "../../public/speakers/plenary/lee.png";
import david from "../../public/speakers/plenary/david.png";
import eric from "../../public/speakers/plenary/eric.png";
import been from "../../public/speakers/plenary/been.png";
import mehta from "../../public/speakers/plenary/mehta.png";
import SpeakerCard from "./SpeakerCard";
import { Container } from "react-bootstrap";

const Speakers = ({ minLength, maxLength }) => {
  const speakers = [
    {
      name: "Dr John Cherrie",
      pic: jhon,
      designation: "Principle Scientist at ",
      institude: "IOM",
    },
    {
      name: "Dr Robert Bridger",
      pic: robert,
      designation: "Consultant and Author in",
      institude: "Human Factors and Ergonomics",
    },
    {
      name: "Dr Jason Lee Kai Wei",
      pic: jason,
      designation: "Director,",
      institude: "Heat Resilience and Performance Centre",
    },
    {
      name: "Dr Joanne Crawford",
      pic: joanne,
      designation: "WorkSafe New Zealand Chair in",
      institude: " Health and Safety",
    },
    {
      name: "Dr Mila Tejamaya",
      pic: mila,
      designation: "Lecturer and researcher at ",
      institude: "Universitas Indonesia",
    },
    {
      name: "Norhazlina Mydin",
      pic: Norhazlina,
      designation: "President at  ",
      institude: "International Occupational Hygiene Association ",
    },
    {
      name: "Marcel Le Roux",
      pic: marcel,
      designation: "Strategic Engagement Manager at",
      institude: " IOSH",
    },
    {
      name: "Dr Miranda Loh",
      pic: miranda,
      designation: "Research Team Lead -  ",
      institude: "IOM",
    },
    {
      name: "Zephan Chan Yu Yun",
      pic: zephan,
      designation: "Director of the Institute of  ",
      institude: "Ergonomics and Hygiene",
    },
    {
      name: "Nektarios Karanikas",
      pic: karanika,
      designation: "Associate Professor in",
      institude: " Health, Safety and Environment",
    },
    {
      name: "Jai Prakash",
      pic: jai,
      designation: "Senior Health and Safety Consultant at  ",
      institude: "Mackin EHS",
    },
    {
      name: "Dr Charles Lee",
      pic: lee,
      designation: "Associate Professor at  ",
      institude: "NAIHE",
    },
    {
      name: "Dr David Thomas",
      pic: david,
      designation: "Senior Lecturer at",
      institude: " Middlesex University",
    },
    {
      name: "Eric Ng",
      pic: eric,
      designation: "Director of  ",
      institude: "Absolute Instrument Systems (Pte.) Ltd.",
    },
    {
      name: "Dr Ang Keng Been",
      pic: been,
      designation:
        "Managing Director and Member of the Board of Directors at  ",
      institude: "SKC",
    },
    {
      name: "Mr Maharshi Mehta",
      pic: mehta,
      designation: "President Elect  ",
      institude: "IOHA",
    },
  ];
  return (
    <Container>
      <div className="row g-5">
        {speakers.slice(minLength, maxLength).map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker}></SpeakerCard>
        ))}
      </div>
    </Container>
  );
};

export default Speakers;
