import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const ProfessionalExpContext = createContext({});

export const ProfessionalExpContextProvider = (props) => {
  const [professionalExpData, setProfessionalExpData] = useState([
    { company: "", position: "", summary: "", startDate: "", endDate: "", id: uuid() },
  ]);
  const [index, setIndex] = useState(0);

  const editProfessionalExp = (field, value) => {
    const newProfessionalExpData = [...professionalExpData];
    newProfessionalExpData[index][field] = value;
    setProfessionalExpData(newProfessionalExpData);
  };

  const addProfessionalExp = () => {
    if (index < 2) {
      setIndex(index + 1);
      setProfessionalExpData([
        ...professionalExpData,
        { company: "", position: "", summary: "", startDate: "", endDate: "", id: uuid() },
      ]);
    } else {
      alert("You can add only 3 professional experiences");
    }
  };

  return (
    <ProfessionalExpContext.Provider
      value={{
        professionalExpData,
        setProfessionalExpData,
        index,
        editProfessionalExp,
        addProfessionalExp,
      }}
    >
      {props.children}
    </ProfessionalExpContext.Provider>
  );
}