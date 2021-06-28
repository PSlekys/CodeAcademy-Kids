import React, { useState, useEffect } from "react";
import { Section, ProductList } from "../../components";

import { getProducts } from "../../services/firebase/content.controller";

const Home = () => {
  const [products, setProducts] = useState();

  const getData = async () => {
    const products = await getProducts();
    setProducts(
      products.docs.map((product) => ({
        id: product.id,
        title: product.data().title,
        description: product.data().description,
      }))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Section>
      <h1 className="title">Būreliai</h1>

      {products && <ProductList products={products} />}
    </Section>
  );
};

export default Home;
