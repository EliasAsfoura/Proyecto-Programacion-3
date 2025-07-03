
import React from "react";
import { useParams } from "react-router-dom";
import ProductCardView from "../Containers/viewProduct/Components/ProductCardView";
import EditProductCard from "../Containers/EditProduct/Components/EditProductCard";


// Funcion para mostrar EditProduct o ViewProduct segun el rol
const ProductRouterView = () => {
  const { id } = useParams();
  const rol = localStorage.getItem("rol");

  return rol === "admin"
    ? <div style={{ display: "flex", justifyContent: "center" }}> 
    <EditProductCard id={id} /> 
    </div>
    : <div style={{ display: "flex", justifyContent: "center" }}>
    <ProductCardView /> 
    </div>;
};

export default ProductRouterView;
