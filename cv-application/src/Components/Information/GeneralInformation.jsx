import React, { useContext } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";
import { GeneralInfoContext } from "../ContextProvider/GeneralInfoContextProvider";

const GeneralInformation = () => {
  const { generalInfo, editGeneralInfo } = useContext(GeneralInfoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <GenericHeader title="General Information" />
      <GenericForm
        submitHandler={handleSubmit}
        label="Name:"
        type="text"
        value={generalInfo.name || ""}
        onChange={(e) => editGeneralInfo("name", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Email:"
        type={"email"}
        value={generalInfo.email || ""}
        onChange={(e) => editGeneralInfo("email", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Phone:"
        type={"text"}
        value={generalInfo.phone || ""}
        onChange={(e) => editGeneralInfo("phone", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="State/Country:"
        type={"text"}
        value={generalInfo.location || ""}
        onChange={(e) => editGeneralInfo("location", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="GitHub:"
        type={"url"}
        value={generalInfo.github || ""}
        onChange={(e) => editGeneralInfo("github", e.target.value)}
      />
    </div>
  );
};

export default GeneralInformation;
