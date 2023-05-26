import React from "react";
import ProductPortfolio from "./ProductPortfolio";
import NavbarProduct from "./NavbarProduct";
import FooterProduct from "./FooterProduct";
import SliceProduct from "./SliceProduct";

export default function HomeProduct() {
  return (
    <div>
      <NavbarProduct />
      <SliceProduct />
      <ProductPortfolio />
      <FooterProduct />
    </div>
  );
}
