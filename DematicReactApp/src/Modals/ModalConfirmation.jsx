import React, { cloneElement, useState } from "react";
import "./Modal.css";

const ModalConfirmation = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  const closeWithoutDelete = (e) => {
    e.preventDefault();
    closeModal();
  }

  return (
    <div
      className="modalContainer"
      onClick={(e) => {
        if (e.target.className === "modalContainer") closeModal();
      }}
    >
      <div className="modalContent">
        <div className="modalTitle">
          <h3>Are you sure you want to delete this row?</h3>
        </div>
        <div className="ConfirmationButtonStyling">
          <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Yes</button>
          <button type="submit" className="btn btn-success" onClick={closeWithoutDelete}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;