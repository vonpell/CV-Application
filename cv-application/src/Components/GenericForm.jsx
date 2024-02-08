import "../styles/GenericForm.css";

function GenericForm({ submitHandler, label, value, onChange }) {
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label className="form-label">
        {label}
        <input
          className="form-input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
      <br />
    </form>
  );
}

export default GenericForm;
