const StageField = ({ handleChange, formState, stageError }) => {
    return (
        <>
        <div className="form-group">
            <label htmlFor="stage">Stage</label>
            <input className="form-control"
              type="text"
              name="stage"
              onChange={handleChange}
              value={formState.stage}
            />
        </div>
        {/* Stage Validation - required and not blank */}
        {stageError && <div className="error">{`Please provide a stage`}</div>}
        </>
    );
}

export default StageField;