import React, { useState } from "react";
import GenericForm from "../GenericForm";
import GenericHeader from "../GenericHeader";

function ProfessionalExperience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(company, position, tasks, startDate, endDate);
  };

  return (
    <div>
      <GenericHeader title="Professional Experience" />
      <GenericForm
        submitHandler={handleSubmit}
        label="Company:"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Position:"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <GenericForm
        submitHandler={handleSubmit}
        label="Tasks:"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
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

export default ProfessionalExperience;