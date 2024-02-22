import '../../Styles/CVEducation.css';
import React from 'react';
import { EducationContext } from './Education';

const CVEducation = () => {
  return (
    <EducationContext.Consumer>
      {({ educationData }) => (
        <div className="education-container">
          <h2>Education</h2>
          <p>{educationData.schoolName}</p>
          <p>{educationData.degree}</p>
          <p>{educationData.startDate}</p>
          <p>{educationData.endDate}</p>
        </div>
      )}
    </EducationContext.Consumer>
  );
};

export default CVEducation;