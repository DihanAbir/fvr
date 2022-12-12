import Head from "next/head";

import banner from "../public/banner/banner_bg.png";
import Dogg from "./Dogg";

export default function Home() {
  const styling = {
    backgroundImage: `url('${banner.src}')`,
    backgroundSize: "cover",
    quality: "100",
    // height: "100vh",
  };
  return (
    // <div>
    //   <div style={styling}>
    //     <Header />
    //     <Banner />
    //   </div>
    //   <AboutEgro />
    //   <Container className="section_gap">
    //     <h2 className="fw-bold black_title">Our Partners & Supporters</h2>
    //     <Partners />
    //   </Container>
    //   <Container id="SpeakerPage" className="section_gap">
    //     <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center my-5">
    //       <SpeakerHeading />
    //       <div>
    //         <a href="SpeakerPage">
    //           <Button className="see_all_btn">Explore All</Button>
    //         </a>
    //       </div>
    //     </div>
    //     <Speakers minLength={0} maxLength={8} />
    //   </Container>

    //   <div className="section_gap" id="ProgramPage">
    //     <ProgrammeDetails />
    //     <HealthManagement />
    //     <Timeline />
    //     <BreakBtn />
    //   </div>
    //   <Container className="section_gap">
    //     <h2 className="text-center mb-5 fw-bold black_title">
    //       Explore Event Gallary
    //     </h2>
    //     <GallerySection length={4} />
    //     <div className="text-center">
    //       <a href="GalleryPage">
    //         <Button className="see_all_btn">See All Photos</Button>
    //       </a>
    //     </div>
    //   </Container>
    //   <div className="section_gap">
    //     <SupportingOgn length={2} />
    //     <div className="text-center">
    //       <a href="SupportingOrganizations">
    //         <Button className="see_all_btn">See All Organizations</Button>
    //       </a>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <>
      <Dogg />
    </>
  );
}
