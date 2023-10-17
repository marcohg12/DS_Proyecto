import React from "react";
import { Link } from "react-router-dom";

function OrderCard({
  orderId,
  name,
  orderDate,
  deliveryDate,
  totalPrice,
  direction,
  state,
  toLink,
  email,
  phone,
  photoLink,
}) {
  return (
    <div class="card">
      <h5 class="card-header">
        <div className="row">
          <div className="col">Pedido: {orderId}</div>
          <div className="col">{state ? "Estado: " + state : ""}</div>
        </div>
      </h5>
      <div className="row g-0">
        <div className={photoLink ? "col-md-8" : "col-md-12"}>
          <div class="card-body">
            <div className="row mb-3 g-0">
              <div className="col">
                <p class="card-text">Fecha de orden: {orderDate}</p>
                <p class="card-text">Fecha de entrega: {deliveryDate}</p>
                <p class="card-text">Precio con envío: {totalPrice}</p>
              </div>
              <div className="col">
                <p class="card-text">{name ? "Nombre: " + name : ""}</p>
                <p class="card-text">
                  {email ? "Correo electrónico: " + email : ""}
                </p>
                <p class="card-text">{phone ? "Teléfono: " + phone : ""}</p>
              </div>
            </div>

            <p class="card-text">Dirección de entrega: {direction}</p>
            {!photoLink ? (
              <div class="d-flex justify-content-end">
                <Link
                  to={toLink}
                  className="btn btn-outline-secondary"
                  style={{ width: "150px" }}
                >
                  Ver detalles
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        {photoLink ? (
          <div className="col-md-4">
            <div className="col">
              <img src={photoLink} alt="" className="card-img" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
