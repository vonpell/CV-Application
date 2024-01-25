import { v4 as uuidv4 } from "uuid";

const defaultData = {
  personalInfo: {
    fullName: "Márcia Meyers",
    email: "marcia.meyers@mail.com",
    phoneNumber: "+55 55 98245 5521",
    address: "Santa Maria, RS, Brazil",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Economics",
        schoolName: "London City University",
        location: "New York City, US",
        startDate: "08/2021",
        endDate: "present",
        id: uuidv4(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "08/2021",
        endDate: "present",
        id: uuidv4(),
      },
    ],

    experiences: [
      {
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients.",
        startDate: "08/2021",
        endDate: "present",
        id: uuidv4(),
      },
      {
        companyName: "Black Kitty Labs",
        positionTitle: "Software Engineer",
        location: "Berlin, Germany",
        description:
          "Supported development in many projects. Also worked with DevOps.",
        startDate: "04/2018",
        endDate: "02/2019",
        id: uuidv4(),
      },
    ],
  },
};

export default defaultData;
