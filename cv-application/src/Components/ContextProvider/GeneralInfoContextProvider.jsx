import { createContext, useState } from "react";

export const GeneralInfoContext = createContext({});

export const GeneralInfoContextProvider = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    location: "",
  });

  const editGeneralInfo = (field, value) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <GeneralInfoContext.Provider value={{ generalInfo, editGeneralInfo }}>
      {props.children}
    </GeneralInfoContext.Provider>
  );
}
