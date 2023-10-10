import React from "react";
import { Link } from "react-router-dom";

function PublicationCard({ id, description, date, category, toLink }) {
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
            src="https://pielboutiquecr.com/wp-content/uploads/2021/10/3337875722827_1.jpg"
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
          <p className="text-truncate mb-3">{description}</p>
          <div className="d-flex justify-content-between">
            <p className="text-muted">{date}</p>
            <p className="ml-auto fw-bold">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PublicationCard;
