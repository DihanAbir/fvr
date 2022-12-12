import React from "react";
import iom from "../../public/supporting-organization/iom.png";
import ohta from "../../public/supporting-organization/ohta.png";
import occupation from "../../public/supporting-organization/occupation.png";
import hfess from "../../public/supporting-organization/hfess.png";
import iiha from "../../public/supporting-organization/iiha.png";
import iosh from "../../public/supporting-organization/iosh.png";
import asia from "../../public/supporting-organization/asia.png";
import national from "../../public/supporting-organization/national.png";
import wsha from "../../public/supporting-organization/wsha.png";
import nsca from "../../public/supporting-organization/nsca.png";
import miha from "../../public/supporting-organization/miha.png";
import naihe from "../../public/supporting-organization/naihe.png";
import { Button, Container } from "react-bootstrap";
import Image from "next/image";

const SupportingOgn = ({ length }) => {
  const organizations = [
    {
      pic: iom,
      title: "Institute of Occupational Medicine",
      description:
        "The Institute of Occupational Medicine (IOM) was founded in 1969 by the National Coal Board (NCB) as an independent charity in the UK and retains this charitable purpose and status today. The 'Institute' has a subsidiary, IOM Consulting Limited, which became fully independent in 1990 and now celebrates its 25th year within the IOM Group as an independent consultancy and also the commercial part of the IOM organization.",
    },
    {
      pic: ohta,
      title: "Occupational Hygiene Training Association",
      description:
        "The Occupational Hygiene Association (OHTA) is a Non-Government Organisation (NGO) that was established as an international training scheme and qualifications framework which provides high-quality training materials in several languages and the infrastructure for low-cost training courses, as part of an internationally recognised programme of study.",
    },
    {
      pic: occupation,
      title: "Occupational & Environmental Health Society Singapore ",
      description:
        "The Occupational and Environmental Health Society is a non-profit organisation dedicated to the promotion of occupational and environmental health in Singapore. ",
    },
    {
      pic: hfess,
      title: "Human Factors and Ergonomics Society of Singapore",
      description:
        "HFESS is a special interest group to promote the awareness of Human Factors and Ergonomics (HFE) in Singapore. This society advocates the application of such knowledge to achieve compatibility in the design of interactive systems between human, machines, and environments to ensure effectiveness, safety, ease of use and performance. ",
    },
    {
      pic: iiha,
      title: "Indonesian Industrial Hygiene Association ",
      description:
        "The Indonesian Industrial Hygiene Association (IIHA) is a voluntary, non-profit, non-governmental professional credentialing organization. IIHA was established on the 12th January 2016 and officially approved by Ministry of Human Right and Law – Republic of Indonesia by the 10th February 2016.",
    },
    {
      pic: iosh,
      title: "Institution of Occupational Safety and Health",
      description:
        "The Institution of Occupational Safety and Health (IOSH) is the Chartered body and largest membership organisation for safety and health professionals. It act as a champion, adviser, advocate, and trainer for health and safety professionals working in organisations of all shapes and sizes, in around 130 countries.",
    },
    {
      pic: asia,
      title: "Asia Pacific Occupational Safety & Health Organization",
      description:
        "The Asia-Pacific Occupational Safety and Health Organization (APOSHO) is an international body composed of non-profit professional organizations devoted to the prevention of occupational accidents and diseases. ",
    },
    {
      pic: national,
      title: "National Safety Council of Singapore",
      description:
        "The Asia-Pacific Occupational Safety and Health Organization (APOSHO) is an international body composed of non-profit professional organizations devoted to the prevention of occupational accidents and diseases. ",
    },
    {
      pic: wsha,
      title: "World of Safety & Health Asia",
      description:
        "Trailblazing the WSH Industry across digital platforms! World of Safety & Health Asia curates safety and health information into a one-stop platform for the benefit of all stakeholders. We help thousands of safety practitioners in Asia continue their professional development with our regular updates on the latest OSH solutions! Visit us at ",
    },
    {
      pic: nsca,
      title: "NSCA Foundation",
      description:
        "NSCA Foundation is a not for profit, member-based association with a vision focused on helping organisations protect your most important asset — your people. Since 1927, we have continued to inspire, educate, inform and engage the Australian work health and safety profession to create and sustain safe and healthy workplaces. ",
    },
    {
      pic: miha,
      title: "Malaysian Industrial Hygiene Association",
      description:
        "MIHA is a non-profit professional organisation founded in 2003. It serves the needs of its members in promoting the field of Industrial Hygiene, providing education and training, forums for the exchange of ideas and information plus representing the interests of industrial Hygienists and those they provide service for. ",
    },
    {
      pic: naihe,
      title: "Newcastle Australia Institute of Higher Education (NAIHE) ",
      description:
        "Newcastle Australia IHE plays an important role in providing access to a world-class higher education in Singapore and the broader region. Newcastle Australia IHE leverages the University of Newcastle’s academic excellence to create distinctiveness, enhance global reputation, and achieve national and regional recognition.",
    },
  ];
  return (
    <Container className="mb-5">
      <h2 className="my-5 fw-bold text-center black_title">
        Supporting Organizations
      </h2>
      <div className="row g-5">
        {organizations.slice(0, length).map((organization, index) => (
          <div key={index} className="col-12 col-lg-6">
            <div className="card shadow-lgN p-5 accomodation_content">
              <Image src={organization.pic} alt="organization img" />
              <h4 className="fw-bold my-4">{organization.title}</h4>
              <p>{organization.description}</p>
              <a href="">
                <Button className="learn_more_btn border-0 mt-4 fw-bold ">
                  Visit Website
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SupportingOgn;
