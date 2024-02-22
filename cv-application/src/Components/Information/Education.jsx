import React, { useState, createContext } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";
import Button from "../GenericButton";

// Criar um contexto
export const EducationContext = createContext();

const Education = () => {
  const [educationData, setEducationData] = useState([{}]);
  const [index, setIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex(index + 1);
    setEducationData([...educationData, {}]);
  };

  const handleChange = (field, value) => {
    const newEducationData = [...educationData];
    newEducationData[index][field] = value;
    setEducationData(newEducationData);
  };

  return (
    <EducationContext.Provider value={{ educationData, setEducationData }}>
      <div>
        <GenericHeader title="Education" />
        <GenericForm
          label="School Name:"
          value={educationData[index].schoolName || ""}
          onChange={(e) => handleChange("schoolName", e.target.value)}
        />
        <GenericForm
          label="Degree:"
          value={educationData[index].degree || ""}
          onChange={(e) => handleChange("degree", e.target.value)}
        />
        <GenericForm
          label="Start Date:"
          value={educationData[index].startDate || ""}
          onChange={(e) => handleChange("startDate", e.target.value)}
        />
        <GenericForm
          label="End Date:"
          value={educationData[index].endDate || ""}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
        <Button 
          text="Add Education"
          onClick={handleSubmit}
        />
      </div>
    </EducationContext.Provider>
  );
};

export default Education;
