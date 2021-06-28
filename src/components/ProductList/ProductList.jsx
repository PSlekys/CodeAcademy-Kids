import React from "react";
import * as S from "./ProductList.style";

import { Product } from "../";

const ProductList = ({ products }) => (
  <div className="columns is-multiline">
    {products &&
      products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
        />
      ))}
  </div>
);

export default ProductList;
