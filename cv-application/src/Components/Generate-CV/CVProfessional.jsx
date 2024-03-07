import React, { useContext } from "react";
import { ProfessionalExpContext } from "../ContextProvider/ProfessionalExpContextProvider";
import "../../Styles/CVProfessional.css";

const CVProfessional = () => {
  const { professionalExpData } = useContext(ProfessionalExpContext);

  return (
    <div>
      {professionalExpData.map((professional, i) => (
        <div className="cvpro" key={professional.id}>
          <p>
            {professional.company && <strong>Company: </strong>}{" "}
            {professional.company}
          </p>
          <p>
            {professional.position && <strong>Position: </strong>}{" "}
            {professional.position}
          </p>
          <p>
            {professional.summary && <strong>Summary</strong>}{" "}
            {professional.summary}
          </p>
          <p>
            {professional.startDate && <strong>Start Date: </strong>}{" "}
            {professional.startDate}
          </p>
          <p>
            {professional.endDate && <strong>End Date: </strong>}{" "}
            {professional.endDate}
          </p>
          {i <= 1 && professional.endDate && <div className="break">-</div>}
        </div>
      ))}
    </div>
  );
};

export default CVProfessional;
