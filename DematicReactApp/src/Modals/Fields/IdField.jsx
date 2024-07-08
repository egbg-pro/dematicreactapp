const IdField = ({ handleChange, formState, disabled, idError }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input className="form-control" disabled={disabled} type="number" min="1" name="id" onChange={handleChange} value={formState.id} />
            </div>
            {/* ID Validation */}
            {idError != "" && <div className="error">{`Please provide a unique ID`}</div>}
        </>
    );
}

export default IdField;