import React, { useState } from "react";

import "./Modal.css";

// add id list to the props to check for existing ids
const Modal = ({ rows, closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      id: 1,
      type: "none",
      prompt: "",
      stage: "",
      enabled: false
    }
  );
  // Separate states into each field that requires validation?
  var [idError, setIdError] = useState("");
  var [typeErrror, setTypeErrror] = useState("");
  var [promptError, setPromptError] = useState("");
  var [stageError, setStageError] = useState("");

  const validateForm = () => {
    var retval = true;

    // ID needs to be a number and not already included in data
    if (!formState.id || Number.isNaN(formState.id) || formState.id === undefined || formState.id == "" || (rows.filter(e => e.id == formState.id).length > 0 && defaultValue == false) || formState.id <= 0) {
        setIdError("turrr");
        retval = false;
    } else setIdError("");

    // Has Type been tampered with?
    const typeOptions = [
        "Capture Alphanumeric",
        "Capture Float",
        "Capture Date",
        "Prompt Only",
        "Boolean"
    ]
    if (!typeOptions.includes(formState.type)) {
        setTypeErrror("true");
        retval = false;
    } else setTypeErrror("");

    // Prompt is required, must be not blank
    if (formState.prompt === undefined || formState.prompt === "" || formState.prompt.length <= 0) {
        setPromptError("True");
        retval = false;
    } else setPromptError("");

    // Stage is required, must be not blank
    if (formState.stage === undefined || formState.stage === "" || formState.stage.length <= 0) {
        setStageError("True");
        retval = false;
    } else setStageError("");

    return retval;
  };

  const handleChange = (e) => {
    // Maybe add error handle code here to try dynamic?
    validateForm();
    if (e.target.name == "enabled") {
        setFormState({ ...formState, [e.target.name]: !formState.enabled });
    } else {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modalContainer"
      onClick={(e) => {
        if (e.target.className === "modalContainer") closeModal();
      }}
    >
      <div className="modalContent">
        <form>
          <div className="modalTitle"><h3>Please enter your fields here:</h3></div>
          {/* ID */}
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input className="form-control" disabled={defaultValue} type="number" min="1" name="id" onChange={handleChange} onFocus={validateForm} value={formState.id} />
          </div>
          {/* ID Validation */}
          {idError != "" && <div className="error">{`Please provide a unique ID`}</div>}


          {/* Type */}
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control"
              name="type"
              onChange={handleChange}
              onFocus={validateForm}
              value={formState.type}
            >
              <option value="none">Please select an option</option>
              <option value="Capture Alphanumeric">Capture Alphanumeric</option>
              <option value="Capture Float">Capture Float</option>
              <option value="Capture Date">Capture Date</option>
              <option value="Prompt Only">Prompt Only</option>
              <option value="Boolean">Boolean</option>
            </select>
          </div>
          {/* Type Validation - must select an option */}
          {typeErrror && <div className="error">{`Please select a valid option`}</div>}


          {/* Prompt */}
          <div className="form-group">
            <label htmlFor="prompt">Prompt</label>
            <input className="form-control"
              type="text"
              name="prompt"
              onChange={handleChange}
              onFocus={validateForm}
              value={formState.prompt}
            />
          </div>
          {/* Prompt Validation - required and not blank */}
          {promptError && <div className="error">{`Please provide a prompt`}</div>}


          {/* Stage */}
          <div className="form-group">
            <label htmlFor="stage">Stage</label>
            <input className="form-control"
              type="text"
              name="stage"
              onChange={handleChange}
              onFocus={validateForm}
              value={formState.stage}
            />
          </div>
          {/* Stage Validation - required and not blank */}
          {stageError && <div className="error">{`Please provide a stage`}</div>}


          {/* Enabled (checkbox) */}
          <div className="form-group checkbox">
            <label className="form-check-label" htmlFor="enabled">Enabled</label>
            <input className="form-check-input" type="checkbox"
              name="enabled"
              onChange={handleChange}
              onFocus={validateForm}
              value={formState.enabled}
              checked={formState.enabled}
            />
          </div>

          {/* Submit to add / edit row */}
          <div className="footerSubmit">
            <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;