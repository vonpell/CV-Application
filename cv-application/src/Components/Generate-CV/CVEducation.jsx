import "../../Styles/CVEducation.css";
import React, { useContext } from "react";
import { EducationContext } from "../Information/Education";

const CVEducation = () => {
  const { educationData } = useContext(EducationContext);

    return (
        <div>
            <h3>Education</h3>
            {educationData.map((education, index) => (
            <div key={index}>
                <h4>{education.schoolName}</h4>
                <p>{education.degree}</p>
                <p>{education.startDate} - {education.endDate}</p>
            </div>
            ))}
        </div>
        );
}

export default CVEducation;
  