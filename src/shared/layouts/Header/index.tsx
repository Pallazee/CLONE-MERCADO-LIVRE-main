import React from "react";

import logo from "@shared/assets/mercado-livre-logo.png";
import { Container, Content, Logo, Nav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <a href="/" aria-label="Página inicial">
          <Logo src={logo} alt="Mercado Livre" />
        </a>

        <Nav>
          <ul>
            <li><a href="#">Cadastre-se</a></li>
            <li><a href="#">Entre</a></li>
            <li><a href="#">Compras</a></li>
          </ul>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
