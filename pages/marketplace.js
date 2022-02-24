import React from "react";
import Layout from "../components/Layout";
import MarketplaceWrapper from "../page-comps/marketplace/MarketplaceWrapper";
import MarketplaceIntro from "../page-comps/marketplace/MarketplaceIntro";

const Marketplace = () => {
  return (
    <Layout title="Danerob | Marketplace" className="marketplace home">
      <MarketplaceIntro />
      <MarketplaceWrapper />
    </Layout>
  );
};

export default Marketplace;
