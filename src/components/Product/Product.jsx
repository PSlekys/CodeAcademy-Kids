import React from "react";
import * as S from "./Product.style";

import { Button } from "../";

const Product = ({ title, description }) => (
  <div className="column is-one-quarter">
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{description}</p>
          <Button color="primary" type="button">
            Užsisakyti
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
