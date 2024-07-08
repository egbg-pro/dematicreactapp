const EnabledField = ({ handleChange, formState }) => {
    return (
        <>
        <div className="form-group checkbox">
            <label className="form-check-label" htmlFor="enabled">Enabled</label>
            <input className="form-check-input" type="checkbox"
                name="enabled"
                onChange={handleChange}
                value={formState.enabled}
                checked={formState.enabled}
            />
        </div>
        </>
    );
}

export default EnabledField;