import React from "react";
import ClientNavbar from "./ClientNavbar";

function ClientWindow({ component }) {
  return (
    <section>
      <ClientNavbar></ClientNavbar>
      <section class="mb-4 mt-4">
        <div className="container" id="client_window">
          {component}
        </div>
      </section>
    </section>
  );
}

export default ClientWindow;
