import "../styles/GenericForm.css";

function GenericForm({ submitHandler, label, type, value, onChange }) {
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label className="form-label">
        {label}
        <input
          className="form-input"
          type={type}
          value={value}
          onChange={onChange}
          required={true}
        />
      </label>
      <br />
    </form>
  );
}

export default GenericForm;
