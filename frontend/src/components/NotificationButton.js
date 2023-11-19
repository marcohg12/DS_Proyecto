import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_ROUTE } from "../scripts/constants";

function NotificationButton() {
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    // Configuración del intervalo de peticiones
    const interval = setInterval(() => {
      // Pedimos la cantidad de notificaciones no leídas
      axios({
        method: "get",
        withCredentials: true,
        url: BACKEND_ROUTE + "/general/get_unread_amount",
      }).then((res) => {
        const response = res.data;
        if (response.result !== 0) {
          setUnreadNotifications(response.result);
        }
      });
    }, 5000);

    // Función de limpieza
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/notifications" className="nav-link text-white">
      Notificaciones{" "}
      {unreadNotifications > 0 ? (
        <span class="badge bg-danger">unreadNotifications</span>
      ) : (
        <></>
      )}
    </Link>
  );
}

export default NotificationButton;
