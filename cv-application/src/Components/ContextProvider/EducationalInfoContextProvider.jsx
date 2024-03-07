import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const EducationContext = createContext({});

export const EducationContextProvider = (props) => {
  const [educationData, setEducationData] = useState([
    { schoolname: "", degree: "", startDate: "", endDate: "", id: uuid() },
  ]);
  const [index, setIndex] = useState(0);

  const editEducation = (field, value) => {
    const newEducationData = [...educationData];
    newEducationData[index][field] = value;
    setEducationData(newEducationData);
  };

  const addEducation = () => {
    if (index < 2) {
      setIndex(index + 1);
      setEducationData([
        ...educationData,
        { schoolname: "", degree: "", startDate: "", endDate: "", id: uuid() },
      ]);
    } else {
      alert("You can add only 3 educations");
    }
  };

  return (
    <EducationContext.Provider
      value={{
        educationData,
        setEducationData,
        index,
        editEducation,
        addEducation,
      }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};
