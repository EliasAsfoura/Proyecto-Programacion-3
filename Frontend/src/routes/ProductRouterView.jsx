
import React from "react";
import { useParams } from "react-router-dom";
import ProductCardView from "../Containers/viewProduct/Components/ProductCardView";
import EditProductCard from "../Containers/EditProduct/Components/EditProductCard";


const ProductRouterView = () => {
  const { id } = useParams();
  const rol = localStorage.getItem("rol");

  return rol === "admin"
    ? <EditProductCard id={id} />
    : <ProductCardView />;
};

export default ProductRouterView;
