import React from "react";

import Layout from "@shared/layouts/Layout";
import Product from "@modules/products/components/Product";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <Product />
      </Layout>
    </>
  );
}

export default App;
