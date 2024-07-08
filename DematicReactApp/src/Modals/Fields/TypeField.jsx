const TypeField = ({ handleChange, formState, typeErrror }) => {
    return (
        <>
        <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control"
                name="type"
                onChange={handleChange}
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
        </>
    );
}

export default TypeField;