import React, { useState } from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import BillingDetails from "../BillingDetails";
import UserDetails from "../UserDetails";
import Review from "../Review";
import VerifyUser from "../VerifyUser";
import FarmDetails from "./FarmDetails";
import "./FarmerInfo.scss";
import VerifyFarm from "./VerifyFarm";
import VerifyFarmOps from "./VerifyFarmOps";

const CreateFarmerProfile: React.FC = () => {
  const step1Content = <UserDetails role="farmer" />;
  const step2Content = <FarmDetails />;
  const step3Content = <VerifyFarm />;
  const step4Content = <VerifyUser />;
  const step5Content = <VerifyFarmOps />;
  const step6Content = <BillingDetails />;
  const step7Content = <Review role="farmer" />;

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
          {
            label: "",
            name: "Finish",
            content: step6Content,
          },
          {
            label: "",
            name: "Finish",
            content: step7Content,
          },
        ]}
        onSubmit={() => console.log("submitted")}
      />
    </div>
  );
};

export default CreateFarmerProfile;
