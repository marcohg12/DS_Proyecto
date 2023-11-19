import React, { useState, useEffect } from "react";
import ClientWindow from "../components/ClientWindow";
import AdminWindow from "../components/AdminWindow";
import axios from "axios";
import { BACKEND_ROUTE } from "../scripts/constants";

function Notifications({ forUser }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      withCredentials: true,
      url: BACKEND_ROUTE + "/general/get_notifications",
    }).then((res) => {
      const response = res.data;
      setNotifications(response.result);
    });
  }, []);

  if (forUser === "admin") {
    return (
      <AdminWindow>
        <div className="mt-4 mb-4">
          {notifications.map((notification) => {
            return (
              <div className="mb-2">
                {notification.title}: {notification.content}
              </div>
            );
          })}
        </div>
      </AdminWindow>
    );
  } else {
    return (
      <ClientWindow>
        <div className="mt-4 mb-4">
          {notifications.map((notification) => {
            return (
              <div className="mb-2">
                {notification.title}: {notification.content}
              </div>
            );
          })}
        </div>
      </ClientWindow>
    );
  }
}

export default Notifications;
