import React from "react";
import * as S from "./ProductList.style";

import { Product } from "../";

import { products } from "../../utils/products";
import { product } from "prelude-ls";

const ProductList = () => (
  <div className="columns is-multiline">
    {products &&
      products.map((product) => (
        <Product title={product.title} description={product.description} />
      ))}
  </div>
);

export default ProductList;
