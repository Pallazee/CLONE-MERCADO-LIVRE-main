import React from "react";

import Layout from "@shared/layouts/Layout";
import ProductPage from "@modules/products/pages/ProductPage";


import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <ProductPage />
      </Layout>
    </>
  );
}

export default App;
