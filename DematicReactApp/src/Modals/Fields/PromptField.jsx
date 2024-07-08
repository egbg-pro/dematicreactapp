const PromptField = ({ handleChange, formState, promptError }) => {
    return (
        <>
        <div className="form-group">
            <label htmlFor="prompt">Prompt</label>
            <input className="form-control"
            type="text"
            name="prompt"
            onChange={handleChange}
            value={formState.prompt}
        />
        </div>
        {/* Prompt Validation - required and not blank */}
        {promptError && <div className="error">{`Please provide a prompt`}</div>}
        </>
    );
}

export default PromptField;