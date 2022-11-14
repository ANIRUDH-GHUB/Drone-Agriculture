import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import ConfirmBooking1 from "./ConfirmBooking1";
import ConfirmBooking2 from "./ConfirmBooking2";
import DroneCatalog from "./DroneCatalog";
import DroneReview from "./DroneReview";
import DroneSchedule from "./DroneSchedule";
import FarmCatalog from "./FarmCatalog";

const BookDrone: React.FC = () => {
  const step1Content = <FarmCatalog />;
  const step2Content = <DroneCatalog />;
  const step3Content = <DroneSchedule />;
  const step4Content = <DroneReview />;
  const step5Content = <ConfirmBooking1 />;
  const step6Content = <ConfirmBooking2 />;

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
        ]}
        onSubmit={() => console.log("submitted")}
      />
    </div>
  );
};

export default BookDrone;
