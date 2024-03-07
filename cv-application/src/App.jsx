import "./App.css";
import Header from "./Components/Header";
import GeneralInformation from "./Components/Information/GeneralInformation";
import Education from "./Components/Information/Education";
import ProfessionalExperience from "./Components/Information/ProfessionalExperience";
import CVEducation from "./Components/Generate-CV/CVEducation";
import CVGeneralInfo from "./Components/Generate-CV/CVGeneralInfo";
import CVProfessional from "./Components/Generate-CV/CVProfessional";

function App() {
  return (
    <>
      <div className="container">
        <div className="upper-side">
          <Header />
          <div className="information-container">
            <div className="general-info">
              <GeneralInformation />
            </div>
            <div className="education">
              <Education />
            </div>
            <div className="professional-exp">
              <ProfessionalExperience />
            </div>
          </div>
        </div>

        <div className="lower-side">
          <div className="lower-left">
            <h2>
              <i className="cvheader">GENERAL INFORMATION</i>
            </h2>
            <CVGeneralInfo />
          </div>
          <div className="lower-middle">
            <h2>
              <i className="cvheader">EDUCATIONAL INFORMATION</i>
              <i className="info" > (last 3)</i>
            </h2>
            <CVEducation />
          </div>
          <div className="lower-right">
            <h2>
              <i className="cvheader">PROFESSIONAL INFORMATION</i>
              <i className="info" > (last 3)</i>
            </h2>
            <CVProfessional />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
