import React from "react";
import AdminWindow from "../components/AdminWindow";
import ProductCard from "../components/ProductCard";
import ClientWindow from "../components/ClientWindow";

function ProductViewer({ forUser }) {
  const products = [];

  const buildProducts = () => {
    for (let i = 0; i < 5; i++) {
      products.push(
        <ProductCard
          toLink={forUser === "admin" ? "/edit_product" : "/view_product"}
          name={"Effaclar Serum - 150ml"}
          price={20000}
          key={i}
        ></ProductCard>
      );
    }
  };

  buildProducts();

  if (forUser === "admin") {
    return (
      <AdminWindow>
        <div className="row mt-4 mb-4"></div>
        <div className="row mt-4">{products}</div>
      </AdminWindow>
    );
  } else {
    return (
      <ClientWindow>
        <div className="row mt-4 mb-4"></div>
        <div className="row mt-4">{products}</div>
      </ClientWindow>
    );
  }
}

export default ProductViewer;
