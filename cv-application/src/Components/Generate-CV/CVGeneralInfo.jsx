import React, { useContext } from "react";
import { GeneralInfoContext } from "../ContextProvider/GeneralInfoContextProvider";
import "../../Styles/CVGeneralInfo.css";

const CVGeneralInfo = () => {
  const { generalInfo } = useContext(GeneralInfoContext);
  return (
    <div className="cvgeneral">
      <p>
        {generalInfo.name && <strong>Name: </strong>}
        {generalInfo.name}
      </p>
      <p>
        {generalInfo.email && <strong>E-mail: </strong>}
        {generalInfo.email}
      </p>
      <p>
        {generalInfo.phone && <strong>Phone: </strong>}
        {generalInfo.phone}
      </p>
      <p>
        {generalInfo.location && <strong>Location: </strong>}
        {generalInfo.location}
      </p>
      <url>
        {generalInfo.github && <strong>GitHub: </strong>}
        {generalInfo.github}
      </url>
    </div>
  );
};

export default CVGeneralInfo;
