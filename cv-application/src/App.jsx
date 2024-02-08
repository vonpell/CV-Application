import "./App.css";
import Header from "./Components/Header";
import GeneralInformation from "./Components/Information/GeneralInformation";
import Education from "./Components/Information/Education";
import ProfessionalExperience from "./Components/Information/ProfessionalExperience";

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
        <div className="lower-side">Hello Wéld</div>
      </div>
    </>
  );
}

export default App;
