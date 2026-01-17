import React from "react";

import { createPreference } from "@modules/products/services/products.service";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  const handleBuyNow = async () => {
    try {
      const data = await createPreference();

      if (!data?.init_point) {
        throw new Error("init_point não retornado pelo backend");
      }

      // ✅ REDIRECIONAMENTO CORRETO
      window.location.href = data.init_point;
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
      alert("Erro ao iniciar pagamento");
    }
  };

  return (
    <Container>
      <Condition>Novo | 9 vendidos</Condition>

      <Row>
        <h1>Camiseta Branca</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">79</span>
          <span className="cents">90</span>
        </PriceRow>

        <InstallmentsInfo>em até 12x no cartão</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Entrega rápida e segura</span>
          <a href="#">Ver mais opções</a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid onClick={handleBuyNow}>
          Comprar agora
        </Button>

        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que você está esperando ou
            devolvemos seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
