import React, { useContext } from "react";
import { EducationContext } from "../ContextProvider/EducationalInfoContextProvider";
import "../../Styles/CVEducation.css";

const CVEducation = () => {
  const { educationData } = useContext(EducationContext);

  return (
    <div>
      {educationData.map((education, i) => (
        <div className="cvedu" key={education.id}>
          <p>
            {education.schoolName && <strong>School Name: </strong>}{" "}
            {education.schoolName}
          </p>
          <p>
            {education.degree && <strong>Degree: </strong>} {education.degree}
          </p>
          <p>
            {education.startDate && <strong>Start Date: </strong>}{" "}
            {education.startDate}
          </p>
          <p>
            {education.endDate && <strong>End Date: </strong>}{" "}
            {education.endDate}
          </p>
          {i <= 1 && education.endDate && <div className="break">-</div>}
        </div>
      ))}
    </div>
  );
};

export default CVEducation;
