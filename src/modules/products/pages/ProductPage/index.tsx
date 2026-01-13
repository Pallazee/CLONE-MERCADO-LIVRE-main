import React from "react";

import Gallery from "@modules/products/components/Gallery";
import ProductAction from "@modules/products/components/ProductAction";
import SellerInfo from "@modules/products/components/SellerInfo";

import tshirt1 from "@shared/assets/tshirt.png";
import tshirt2 from "@shared/assets/tshirt.png";
import tshirt3 from "@shared/assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Section,
  Description,
} from "./styles";

const ProductPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        {/* COLUNA ESQUERDA */}
        <Column>
          <Gallery images={[tshirt1, tshirt2, tshirt3]} />
          <ProductDescription />
        </Column>

        {/* COLUNA DIREITA */}
        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

/* =========================
   COMPONENTES AUXILIARES
========================= */

const WarrantySection: React.FC = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida</p>
        <p className="description">
          Receba o produto esperado ou devolvemos seu dinheiro.
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const ProductDescription: React.FC = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      <strong>Gênero:</strong> Masculino <br />
      <strong>Material:</strong> 100% Algodão penteado fio 30.1 <br />
      <strong>Manga:</strong> Curta <br />
      <strong>Gola:</strong> Redonda <br />
      <strong>Unidades:</strong> 1
      <br />
      <br />
      Camiseta lisa com gramatura 160, alta durabilidade e dupla costura.
      <br />
      <br />
      <strong>Tamanhos:</strong> P · M · G · GG
      <br />
      <br />
      <strong>Dimensões:</strong>
      <br />
      P — 68 × 49 cm <br />
      M — 69 × 50 cm <br />
      G — 73 × 53 cm <br />
      GG — 74 × 55 cm
    </p>
  </Description>
);

export default ProductPage;
