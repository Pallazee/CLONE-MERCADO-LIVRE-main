import React from "react";

import tshirtImage from "@shared/assets/tshirt.png";

import SellerInfo from "@modules/products/components/SellerInfo";
import ProductAction from "@modules/products/components/ProductAction";

import {
  Container,
  Row,
  Panel,
  Column,
  Galery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Galery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection: React.FC = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
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

const Info: React.FC = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Gênero: Masculino <br />
      Material principal: 100% Algodão Penteado fio 30.1 <br />
      Tipo de manga: Curta <br />
      Tipo de gola: Gola redonda <br />
      Unidades por pacote: 1
      <br />
      <br />
      Camiseta Lisa 100% Algodão Penteado Fio 30.1 GRAMATURA 160!
      <br />
      <br />
      » Tecido de alta durabilidade <br />
      » Alta tecnologia <br />
      » Dupla costura
      <br />
      <br />
      Tamanhos: P - M - G - GG
      <br />
      <br />
      Itens inclusos:
      <br />
      - 1x Camiseta Branca
      <br />
      - Brindes promocionais
      <br />
      <br />
      Dimensões:
      <br />
      P - 68cm x 49cm
      <br />
      M - 69cm x 50cm
      <br />
      G - 73cm x 53cm
      <br />
      GG - 74cm x 55cm
    </p>
  </Description>
);

export default Product;
