import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import GallerySection from "./GallerySection";

const Gallery = () => {
  return (
    <Container>
      <h2 className="fw-bold text-center my-5">Gallery</h2>
      <GallerySection />
    </Container>
  );
};

export default Gallery;
