import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import BillingDetails from "../BillingDetails";
import "../CreateFarmerProfile/FarmerInfo.scss";
import Review from "../Review";
import UserDetails from "../UserDetails";
import VerifyUser from "../VerifyUser";
import VerifyPilot from "./VerifyPilot";

const CreatePilotProfile: React.FC = () => {
  const step1Content = <UserDetails />;
  const step2Content = <VerifyPilot />;
  const step3Content = <VerifyUser />;
  const step4Content = <BillingDetails />;
  const step5Content = <Review />;

  // console.log(farmerCombined);

  return (
    <div className="farmer-info">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "",
            name: "Briefing",
            content: step1Content,
          },
          {
            label: "",
            name: "Image-Acquisition",
            content: step2Content,
          },
          {
            label: "",
            name: "Image Processing",
            content: step3Content,
          },
          {
            label: "",
            name: "Finish",
            content: step4Content,
          },
          {
            label: "",
            name: "Finish",
            content: step5Content,
          },
        ]}
        onSubmit={() => console.log("submitted")}
      />
    </div>
  );
};

export default CreatePilotProfile;
