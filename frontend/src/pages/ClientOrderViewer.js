import React, { useState, useEffect } from "react";
import { BACKEND_ROUTE } from "../scripts/constants";
import ClientWindow from "../components/ClientWindow";
import OrderCard from "../components/OrderCard";

function ClientOrderViewer() {
  return (
    <ClientWindow>
      <div className="mt-4 mb-4">
        <OrderCard
          orderId={"ASKJLKJFLSKJFLKJSD"}
          orderDate={"12-10-2023"}
          deliveryDate={"14-10-2023"}
          direction={"San José-San Pedro-Montes de Oca-500 mts de la bomba"}
          totalPrice={2500}
          name={"a"}
          email={"v"}
          phone={"3"}
        ></OrderCard>
      </div>
    </ClientWindow>
  );
}

export default ClientOrderViewer;
