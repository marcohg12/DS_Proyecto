import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";

function MessageModal({ message, is_open, close, error }) {
  return (
    <ReactModal
      isOpen={is_open}
      onRequestClose={close}
      className="mt-4 mb-4 modal-dialog modal-lg"
    >
      {error ? (
        <div class=" alert alert-danger">{message}</div>
      ) : (
        <div class=" alert alert-success">{message}</div>
      )}
    </ReactModal>
  );
}

export default MessageModal;
