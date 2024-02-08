import React, { useState } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schoolName, degree, startDate, endDate);
  };

  return (
    <div>
      <GenericHeader title="Education" />
      <GenericForm
        submitHandler={handleSubmit}
        label="School Name:"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Degree:"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Start Date:"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="End Date:"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
}

export default Education;
