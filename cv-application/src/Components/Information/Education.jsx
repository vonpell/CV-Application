import React, { useContext } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";
import Button from "../GenericButton";
import { EducationContext } from "../ContextProvider/EducationalInfoContextProvider";
import "../../styles/Education.css"; 

const Education = () => {
  const { educationData, addEducation, editEducation, index } =
    useContext(EducationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation();
  };

  return (
    <div >
      <GenericHeader title="Education" />
      <GenericForm
        label="School Name:"
        type="text"
        value={educationData[index]?.schoolName || ""}
        onChange={(e) => editEducation("schoolName", e.target.value)}
      />
      <GenericForm
        label="Degree:"
        type="text"
        value={educationData[index]?.degree || ""}
        onChange={(e) => editEducation("degree", e.target.value)}
      />
      <GenericForm
        label="Start Date:"
        type="date"
        value={educationData[index]?.startDate || ""}
        onChange={(e) => editEducation("startDate", e.target.value)}
      />
      <GenericForm
        label="End Date:"
        type="date"
        value={educationData[index]?.endDate || ""}
        onChange={(e) => editEducation("endDate", e.target.value)}
      />
      <Button className={"button"} text="Add Education" onClick={handleSubmit} />
    </div>
  );
};

export default Education;
