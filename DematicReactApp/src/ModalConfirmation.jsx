import React, { useState } from "react";

import "./Modal.css";

// add id list to the props to check for existing ids
const ModalConfirmation = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <p>Are you sure you want to delete this row?</p>
        {/* Submit to confirm delete */}
        <button type="submit" className="btn" onClick={handleSubmit}>
            Confirm Delete
          </button>
      </div>
    </div>
  );
};

export default ModalConfirmation;