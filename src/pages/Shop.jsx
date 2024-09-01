import React from "react";
import Layout from "../components/layout/Layout";
import Store from "../components/shop/Store";

const Shop = () => {
  return (
    <Layout>
      <div className="relative w-full h-full">
        <Store />
      </div>
    </Layout>
  );
};

export default Shop;
