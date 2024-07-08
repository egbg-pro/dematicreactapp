import React, { useState } from "react";
import IdField from "./Fields/IdField";
import TypeField from "./Fields/TypeField";
import PromptField from "./Fields/PromptField";
import StageField from "./Fields/StageField";
import EnabledField from "./Fields/EnabledField";
import "./Modal.css";

// add id list to the props to check for existing ids
const ModalForm = ({ rows, closeModal, onSubmit, defaultValue }) => {
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
          <IdField handleChange={handleChange} formState={formState} disabled={defaultValue} idError={idError} />
          {/* Type */}
          <TypeField handleChange={handleChange} formState={formState} typeErrror={typeErrror} />
          {/* Prompt */}
          <PromptField handleChange={handleChange} formState={formState} promptError={promptError} />
          {/* Stage */}
          <StageField handleChange={handleChange} formState={formState} stageError={stageError} />
          {/* Enabled (checkbox) */}
          <EnabledField handleChange={handleChange} formState={formState} />

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

export default ModalForm;