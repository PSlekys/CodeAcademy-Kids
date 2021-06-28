import React from "react";
import * as S from "./Product.style";
import { useHistory } from "react-router";

import { Button } from "../";

const Product = ({ id, title, description }) => {
  const history = useHistory();

  const goToPage = (url) => {
    history.push(url);
  };

  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h3 className="title">{title}</h3>
            <p className="subtitle">{description}</p>
            <Button
              color="primary"
              type="button"
              handleClick={() => goToPage(`/course/${id}`)}
            >
              Užsisakyti
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
