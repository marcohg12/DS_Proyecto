import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, name, price, toLink }) {
  return (
    <Link
      to={toLink}
      className="col-lg-4 col-md-12 mb-4"
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div
          className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
            className="w-100"
            alt=""
          />
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-100"></div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          <p>₡{Intl.NumberFormat("en-US").format(price)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
