import React, { useState } from "react";
import { Container, Thumbnails, Preview } from "./styles";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <Container>
      <Thumbnails>
        {images.map((img) => (
          <button
            key={img}
            className={img === activeImage ? "active" : ""}
            onMouseEnter={() => setActiveImage(img)}
          >
            <img src={img} alt="Miniatura do produto" />
          </button>
        ))}
      </Thumbnails>

      <Preview>
        <img src={activeImage} alt="Imagem principal do produto" />
      </Preview>
    </Container>
  );
};

export default Gallery;
