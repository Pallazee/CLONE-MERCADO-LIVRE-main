import React from "react";

import Header from "@shared/layouts/Header";
import Footer from "@shared/layouts/Footer";

import { Container, Wrapper } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />

      <Wrapper>
        {children}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Layout;
