import React, { useState } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gitHub, setGitHub] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, gitHub);
  };

  return (
    <div>
      <GenericHeader title="General Information" />
      <GenericForm
        submitHandler={handleSubmit}
        label="Name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Phone:"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="GitHub:"
        value={gitHub}
        onChange={(e) => setGitHub(e.target.value)}
      />
    </div>
  );
}

export default GeneralInformation;
