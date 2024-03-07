import React, { useContext, useState } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";
import Button from "../GenericButton";
import { ProfessionalExpContext } from "../ContextProvider/ProfessionalExpContextProvider";
import "../../Styles/ProfessionalExperience.css";

const ProfessionalExperience = () => {
  const {
    professionalExpData,
    index,
    editProfessionalExp,
    addProfessionalExp,
  } = useContext(ProfessionalExpContext);  

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfessionalExp();
  };

  return (
    <div>
      <GenericHeader title="Professional Experience" />
      <GenericForm
        submitHandler={handleSubmit}
        label="Company:"
        type="text"
        value={professionalExpData[index]?.company || ""}
        onChange={(e) => editProfessionalExp("company", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Position:"
        type="text"
        value={professionalExpData[index]?.position || ""}
        onChange={(e) => editProfessionalExp("position", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Summary:"
        type="text"
        value={professionalExpData[index]?.summary || ""}
        onChange={(e) => editProfessionalExp("summary", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Start Date:"
        type="date"
        value={professionalExpData[index]?.startDate || ""}
        onChange={(e) => editProfessionalExp("startDate", e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="End Date:"
        type="date"
        value={professionalExpData.endDate}
        onChange={(e) => editProfessionalExp("endDate", e.target.value)}
      />
      <Button
        className={"buttonProfessional"}
        text="Add Professional Experience"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ProfessionalExperience;
